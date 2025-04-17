
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Edit, Trash, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DocumentActionsProps {
  documentId: string;
  onDelete: () => void;
  onShare: () => void;
}

const DocumentActions = ({ documentId, onDelete, onShare }: DocumentActionsProps) => {
  const navigate = useNavigate();

  return (
    <CardFooter className="border-t pt-4 mt-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2">
          <Button 
            onClick={() => navigate(`/document/${documentId}/edit`)} 
            variant="outline" 
            className="gap-1"
          >
            <Edit className="h-4 w-4" />
            Upraviť
          </Button>
          <Button 
            onClick={onDelete} 
            variant="outline" 
            className="text-destructive hover:text-destructive gap-1"
          >
            <Trash className="h-4 w-4" />
            Vymazať
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          className="gap-1"
          onClick={onShare}
        >
          <Share2 className="h-4 w-4" />
          Zdieľať
        </Button>
      </div>
    </CardFooter>
  );
};

export default DocumentActions;
