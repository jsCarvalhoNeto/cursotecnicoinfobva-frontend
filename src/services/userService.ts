/**
 * Serviço para gerenciamento de usuários (usando API real)
 */

export interface User {
  id: string;
  email: string;
  full_name: string;
  student_registration?: string | null;
  created_at: string;
  roles: Array<{ role: string }>;
}

/**
 * Busca todos os usuários do sistema (usando API real)
 */
export async function getAllUsers(): Promise<User[]> {
  console.log("Buscando todos os usuários (API real)...");
  
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuários');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}
