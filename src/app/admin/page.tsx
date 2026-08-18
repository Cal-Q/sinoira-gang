"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { ShieldAlert, Users, Trash2, Plus } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const { isAdmin, associatedMembers, addAssociatedMember, removeAssociatedMember } = useAuth();
  const [newEmail, setNewEmail] = useState("");

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-32 text-center max-w-2xl">
        <ShieldAlert size={64} className="mx-auto text-red-500 mb-6" />
        <h1 className="text-3xl font-bold text-[#2d3748] mb-4">Accesso Negato</h1>
        <p className="text-gray-600 mb-8">Questa pagina è riservata esclusivamente agli amministratori.</p>
        <Link href="/" className="text-blue-500 font-bold hover:underline">Torna alla Home</Link>
      </div>
    );
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmail) {
      addAssociatedMember(newEmail);
      setNewEmail("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-nunito font-extrabold text-[#2d3748] mb-8">Pannello di Amministrazione</h1>
      
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-blue-500" size={28} />
          <h2 className="text-2xl font-bold text-[#2d3748]">Gestione Soci (Membri Associati)</h2>
        </div>

        <form onSubmit={handleAdd} className="flex gap-4 mb-8">
          <input 
            type="email" 
            placeholder="Email del nuovo socio (es. utente@gmail.com)"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2">
            <Plus size={20} /> Aggiungi
          </button>
        </form>

        <div className="space-y-4">
          {associatedMembers.length === 0 ? (
            <p className="text-gray-500">Nessun membro associato attualmente registrato.</p>
          ) : (
            associatedMembers.map((email) => (
              <div key={email} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-700">{email}</span>
                <button 
                  onClick={() => removeAssociatedMember(email)}
                  className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                  title="Rimuovi socio"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
