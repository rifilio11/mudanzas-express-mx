"use client";

import businessData from "@/lib/businessData";
import { useState } from "react";

export default function ChatAgent() {
    const negocio = businessData.negocio;
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<any[]>([
  {
    role: "assistant",
    content: `Hola 👋 Soy el asistente virtual de ${negocio.nombre}. ¿Cómo puedo ayudarte?`,
    whatsapp: false
  }
]);

  const [input, setInput] = useState("");
  const [chatStep, setChatStep] = useState("idle");

const [leadData, setLeadData] = useState({
  nombre: "",
  telefono: "",
  servicio: ""
});

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input
    };

    let response =
      "Gracias por tu mensaje. Un asesor puede ayudarte mejor por WhatsApp.";
      let showWhatsappButton = false;

    const question = input.toLowerCase();
    if (chatStep === "asking_name") {

  setLeadData((prev) => ({
    ...prev,
    nombre: input
  }));

  setMessages((prev) => [
    ...prev,
    userMessage,
    {
      role: "assistant",
      content: "Gracias. ¿Cuál es tu teléfono?",
      whatsapp: false
    }
  ]);

  setChatStep("asking_phone");
  setInput("");

  return;
}
if (chatStep === "asking_phone") {

  const soloNumeros = input.replace(/\D/g, "");

  if (soloNumeros.length < 10) {

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "assistant",
        content:
          "Por favor ingresa un número telefónico válido de al menos 10 dígitos.",
        whatsapp: false
      }
    ]);

    setInput("");

    return;
  }

  setLeadData((prev) => ({
    ...prev,
    telefono: soloNumeros
  }));

  setMessages((prev) => [
    ...prev,
    userMessage,
    {
      role: "assistant",
      content: "Perfecto. ¿Qué servicio te interesa?",
      whatsapp: false
    }
  ]);

  setChatStep("asking_service");
  setInput("");

  return;
}
if (chatStep === "asking_service") {
  const updatedLead = {
    ...leadData,
    servicio: input
  };

  setLeadData(updatedLead);

  try {
    await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLead),
    });
  } catch (error) {
    console.error("Error guardando lead:", error);
  }

  setMessages((prev) => [
    ...prev,
    userMessage,
    {
      role: "assistant",
      content:
        "Perfecto. Hemos registrado tu información. Un asesor continuará por WhatsApp.",
      whatsapp: true,
    },
  ]);

  setChatStep("idle");
  setInput("");

  return;
}    if (
  question.includes("precio") ||
  question.includes("costo") ||
  question.includes("cuanto")
) {
  response =
    `Nuestros servicios tienen un rango aproximado de ${negocio.precio_promedio}. ¿Te gustaría una cotización personalizada?`;
}

    if (
  question.includes("horario") ||
  question.includes("hora") ||
  question.includes("abren")
) {
  response =
    `Nuestro horario principal es ${negocio.horario.Lunes}.`;
}

    if (
  question.includes("ubicacion") ||
  question.includes("direccion") ||
  question.includes("donde")
) {
  response =
    `Nos ubicamos en ${negocio.direccion}.`;
}

    if (
  question.includes("telefono") ||
  question.includes("llamar") ||
  question.includes("contacto")
) {
  response =
    `Puedes comunicarte al ${negocio.telefono}.`;
}
if (
  question.includes("servicios") ||
  question.includes("ofrecen") ||
  question.includes("hacen")
) {
  response =
    `Ofrecemos: ${negocio.servicios.join(", ")}.`;
}
if (
  question.includes("cotizacion") ||
  question.includes("cotizar") ||
  question.includes("whatsapp") ||
  question.includes("asesor") ||
  question.includes("contratar")
) {
  response =
    "Excelente. Antes de continuar, ¿cuál es tu nombre?";

  setChatStep("asking_name");
}

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
  role: "assistant",
  content: response,
  whatsapp: showWhatsappButton
}
    ]);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-orange-500
          text-white
          text-2xl
          shadow-xl
        "
      >
        🤖
      </button>

      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            w-96
            h-[500px]
            bg-[#111827]
            border
            border-white/10
            rounded-3xl
            shadow-2xl
            flex
            flex-col
            z-50
          "
        >
          <div className="p-4 border-b border-white/10 text-white font-bold">
            Asistente Virtual
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "assistant"
                    ? "text-gray-300"
                    : "text-orange-400 text-right"
                }
              >
                <>
  <div>{msg.content}</div>

  {msg.whatsapp && (
    <a
      href={`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(
  `Hola, vi el sitio web de ${negocio.nombre} y deseo más información.`
)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-block
        mt-3
        bg-green-500
        hover:bg-green-600
        text-white
        px-4
        py-2
        rounded-xl
        font-semibold
      "
    >
      💬 Continuar por WhatsApp
    </a>
  )}
</>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="
                flex-1
                bg-black
                text-white
                px-3
                py-2
                rounded-xl
              "
            />

            <button
              onClick={handleSend}
              className="
                bg-orange-500
                px-4
                rounded-xl
                text-white
              "
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
