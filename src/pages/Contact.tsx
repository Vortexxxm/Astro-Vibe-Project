
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import StarField from '@/components/StarField';
import { ArrowLeft, Phone, Mail, MapPin, Send, Clock, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs requis',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => navigate('/home')}
            variant="outline"
            className="border-zodiac-gold/30 text-zodiac-star hover:bg-zodiac-gold/10 bg-black/20 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-zodiac-gold to-zodiac-purple bg-clip-text text-transparent">
              Contactez-nous
            </h1>
            <p className="text-zodiac-star/70 mt-2">Nous sommes là pour vous accompagner</p>
          </div>
          
          <div className="w-24"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="zodiac-card border-2 border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-zodiac-gold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Informations de contact
                </CardTitle>
                <CardDescription className="text-zodiac-star/70">
                  Plusieurs moyens pour nous joindre
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-medium text-zodiac-star">Téléphone</p>
                    <p className="text-green-400 font-mono">0642461885</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium text-zodiac-star">Email</p>
                    <p className="text-blue-400 font-mono">Astrovibe@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-zodiac-purple/10 to-zodiac-purple/5 border border-zodiac-purple/20">
                  <MapPin className="w-5 h-5 text-zodiac-purple" />
                  <div>
                    <p className="font-medium text-zodiac-star">Localisation</p>
                    <p className="text-zodiac-purple">Service en ligne 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heures d'ouverture */}
            <Card className="zodiac-card border-2 border-zodiac-purple/30 bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-zodiac-purple flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Disponibilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-zodiac-star/80">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="text-zodiac-gold">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend</span>
                    <span className="text-zodiac-gold">10h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support Email</span>
                    <span className="text-green-400">24h/24</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipe */}
            <Card className="zodiac-card border-2 border-green-500/30 bg-black/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Notre équipe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zodiac-star/80 text-sm leading-relaxed">
                  Notre équipe d'experts en astrologie est passionnée par l'art de révéler 
                  les secrets des étoiles. Nous vous accompagnons dans votre découverte personnelle 
                  avec professionnalisme et bienveillance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card className="zodiac-card border-2 border-zodiac-gold/30 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-zodiac-gold flex items-center gap-2">
                <Send className="w-5 h-5" />
                Envoyez-nous un message
              </CardTitle>
              <CardDescription className="text-zodiac-star/70">
                Nous vous répondrons dans les 24 heures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zodiac-star">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zodiac-star">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-zodiac-star">Sujet</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zodiac-star">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-black/30 border-zodiac-gold/30 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Décrivez votre demande ou question..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-zodiac-gold hover:bg-zodiac-gold/80 text-black font-bold py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
