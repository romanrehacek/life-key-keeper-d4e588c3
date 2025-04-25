
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
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
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
      title: "Kontaktný formulár odoslaný",
      description: "Ďakujeme za vašu správu. Budeme vás kontaktovať čo najskôr.",
    });
    form.reset();
  }
  
  return (
    <PageTemplate title="Kontakt">
      <Helmet>
        <title>Kontakt | Životný kľúč</title>
        <meta name="description" content="Kontaktujte nás s akýmikoľvek otázkami alebo požiadavkami." />
      </Helmet>
    
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
            <p className="text-muted-foreground mb-8">Kontaktujte nás s akýmikoľvek otázkami alebo požiadavkami.</p>
            
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
              <h3 className="font-semibold mb-2">Otváracie hodiny kancelárie</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Pracovné dni</div>
                <div>9:00 - 17:00</div>
                <div>Víkendy</div>
                <div>Zatvorené</div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Odoslať správu</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meno</FormLabel>
                      <FormControl>
                        <Input placeholder="Vaše meno" {...field} />
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
                      <FormLabel>Email</FormLabel>
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
                      <FormLabel>Správa</FormLabel>
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
      </div>
    </PageTemplate>
  );
};

export default ContactPage;
