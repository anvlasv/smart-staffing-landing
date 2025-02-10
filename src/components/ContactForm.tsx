
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 bg-accent" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Оставить заявку</h2>
            <p className="text-gray-600">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                placeholder="Телефон"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Опишите ваши требования"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
