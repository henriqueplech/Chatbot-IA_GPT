"use client";

import { Key } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Vercell SDK me ajudou a criar esse chatbot
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.map(
          (message: { id: Key | null | undefined; role: string; content: string }) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>HF</AvatarFallback>
                    <AvatarImage
                      className="w-56px h-56px rounded-full"
                      src="https://github.com/henriqueplech.png"
                    />
                  </Avatar>
                )}
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>HF</AvatarFallback>
                    <AvatarImage
                      className="w-56px h-56px rounded-full"
                      src="https://github.com/gpt.png"
                    />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Usuário" : "AI"}:
                  </span>
                  {message.content}
                </p>
              </div>
            );
          }
        )}
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como eu posso te ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
