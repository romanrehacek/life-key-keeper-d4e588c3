
import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
import PageTemplate from '@/components/PageTemplate';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Meno musí mať aspoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Zadajte platnú e-mailovú adresu.",
  }),
  subject: z.string().min(5, {
    message: "Predmet musí mať aspoň 5 znakov.",
  }),
  message: z.string().min(10, {
    message: "Správa musí mať aspoň 10 znakov.",
  }),
});

const ContactPage = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Správa odoslaná",
      description: "Ďakujeme za vašu správu. Odpovieme čo najskôr.",
    });
    form.reset();
  }
  
  return (
    <PageTemplate title="Kontaktujte nás">
      <Helmet>
        <title>Kontaktujte nás | Životný kľúč</title>
        <meta name="description" content="Máte otázky? Neváhajte nás kontaktovať. Naši odborníci vám radi pomôžu s čímkoľvek." />
        <meta name="keywords" content="kontakt, pomoc, podpora, životný kľúč, digitálne dedičstvo" />
      </Helmet>
    
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">Kontaktujte nás</h1>
            <p className="text-muted-foreground mb-8">
              Máte otázky alebo potrebujete pomoc? Vyplňte kontaktný formulár a my sa vám ozveme čo najskôr. Prípadne nás môžete kontaktovať priamo telefonicky alebo e-mailom.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-4 text-lifekey-teal" />
                <div>
                  <h3 className="font-semibold">E-mailová adresa</h3>
                  <a href="mailto:info@zivotny-kluc.sk" className="text-lifekey-teal hover:underline">
                    info@zivotny-kluc.sk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-4 text-lifekey-teal" />
                <div>
                  <h3 className="font-semibold">Telefónne číslo</h3>
                  <a href="tel:+421912345678" className="text-lifekey-teal hover:underline">
                    +421 912 345 678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-4 text-lifekey-teal" />
                <div>
                  <h3 className="font-semibold">Adresa</h3>
                  <address className="not-italic">
                    Životný kľúč, s.r.o.<br />
                    Hlavná 123<br />
                    811 01 Bratislava<br />
                    Slovensko
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-semibold mb-2">Prevádzkové hodiny</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Pondelok - Piatok</div>
                <div>9:00 - 17:00</div>
                <div>Sobota</div>
                <div>Zatvorené</div>
                <div>Nedeľa</div>
                <div>Zatvorené</div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Napíšte nám</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vaše meno</FormLabel>
                      <FormControl>
                        <Input placeholder="Zadajte vaše meno" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Váš email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="vas@email.sk" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Predmet</FormLabel>
                      <FormControl>
                        <Input placeholder="O čom nám chcete napísať?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vaša správa</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Napíšte vašu správu..." 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="bg-lifekey-teal hover:bg-lifekey-blue w-full">
                  Odoslať správu
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Odoslaním formulára súhlasíte so spracovaním vašich osobných údajov v súlade s našimi 
                  <a href="/privacy" className="text-lifekey-teal hover:underline mx-1">zásadami ochrany osobných údajov</a>.
                </p>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="font-semibold mb-4 text-xl">Kde nás nájdete</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden border">
            <iframe 
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8360983598!2d17.105438376536116!3d48.14258347128465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89448936079f%3A0x618de0e5a2e0da3c!2zSGxhdm7DqSBuw6FtZXN0aWUsIDgxMSAwMSBCcmF0aXNsYXZh!5e0!3m2!1sen!2ssk!4v1681726346250!5m2!1sen!2ssk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ContactPage;
