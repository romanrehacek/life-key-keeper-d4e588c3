
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from 'lucide-react';

const DocumentEdit = () => {
  const { id } = useParams();

  return (
    <PageTemplate title="Upraviť dokument">
      <div className="max-w-4xl mx-auto">
        <Link to={`/document/${id}`} className="inline-flex items-center text-lifekey-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Späť na dokument
        </Link>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Upraviť dokument</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Názov dokumentu</Label>
              <Input id="title" defaultValue="Informácie o domácnosti" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Popis</Label>
              <Input id="description" defaultValue="Kúrenie, ističe, zabezpečenie domu a ovládanie smart zariadení." />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="type">Typ dokumentu</Label>
              <Select defaultValue="household">
                <SelectTrigger>
                  <SelectValue placeholder="Vyberte typ dokumentu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="household">Domácnosť</SelectItem>
                  <SelectItem value="finance">Financie</SelectItem>
                  <SelectItem value="crypto">Kryptomeny</SelectItem>
                  <SelectItem value="family">Rodina a kontakty</SelectItem>
                  <SelectItem value="instructions">Čo robiť, ak...</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content">Obsah dokumentu</Label>
              <Textarea 
                id="content" 
                className="min-h-[400px]"
                defaultValue={`# Zabezpečovací systém\n\nKód do alarmu: 1234\n\nAlarm sa zapína/vypína pri vchodových dverách na ovládacom paneli.\n\n# Kúrenie\n\nKotol sa nachádza v technickej miestnosti...`}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Zrušiť</Button>
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue">Uložiť zmeny</Button>
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default DocumentEdit;
