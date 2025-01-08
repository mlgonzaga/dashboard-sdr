import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { useState } from "react";
//import axios from  'axios'
import { useNavigate } from "react-router-dom";




// Definição do schema de validação
const loginSchema = z.object({
  email: z.string().email({message: "Email inválido"}),
  senha: z.string().min(2, "O título deve ter no mínimo 2 caracteres").max(50),
  
});

const Login: React.FC = () => {
  const [authError, setAuthError] = useState<string | null>(null)
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      senha: ""
    },
  });


  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Simulando autenticação
    const mockUser = {
      email: "usuario1@biofy.com",
      senha: "123",
    }
    if(values.email === mockUser.email && values.senha === mockUser.senha) {
      setAuthError(null) //Limpa qualquer erro anterior
      navigate('/dashboard')
    }else {
      setAuthError("Usuário ou senha inválidos")
    }
  }



  

 

  //Integrar com a API

  /*try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/login`, values)
    navigate('/dashboard')
  } catch (err) {
    console.error(err)
    setAuthError("Erro ao conectar com a API")
  }
    */
  

  

  // return (
  //   <div className="flex flex-col items-center bg-zinc-100 px-8 py-2 rounded-md">
  //     <img className="w-[140px] h-[140px] items" src="logo-biofy.png" alt="Logo Biofy" />
  //     <Form {...form}>
  //     <form
  //       onSubmit={form.handleSubmit(onSubmit)}
  //       className="space-y-7 border-2 w-[400px] h-[380px] p-8 rounded-md drop-shadow-md "
  //     >
  //       <FormField
  //         control={form.control}
  //         name="email"
  //         render={({ field }) => (
  //           <FormItem>
  //             <FormLabel>Email</FormLabel>
  //             <FormControl>
  //               <Input placeholder="Seu email" {...field} />
  //             </FormControl>
  //             <div className="h-[1rem]">
  //               <FormMessage />
  //             </div>
  //           </FormItem>
  //         )}
  //       />
  //       <FormField
  //         control={form.control}
  //         name="senha"
  //         render={({ field }) => (
  //           <FormItem>
  //             <FormLabel>Senha</FormLabel>
  //             <FormControl>
  //               <Input placeholder="Informe sua senha" {...field} />
  //             </FormControl>
  //             <div className="h-[1rem]">
  //               <FormMessage />
  //             </div>
  //           </FormItem>
  //         )}
  //       />
        
  //       <div className="flex bottom-0 flex-col gap-2 ">
  //         <Button
  //         onClick={()=> navigate('/dashboard')}
  //         type="submit">Login</Button>
  //       </div>
  //     </form>
  //   </Form>
  //   </div>
    
  // );
  return (
    <div className="flex flex-col items-center bg-zinc-100 px-8 py-2 rounded-md">
      <img
        className="w-[140px] h-[140px] items"
        src="logo-biofy.png"
        alt="Logo Biofy"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-7 border-2 w-[400px] h-[400px] p-8 rounded-md drop-shadow-md"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Seu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Informe sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<div className="h-[1.5rem] flex items-center justify-center">
            {authError && (
              <p className="text-red-500 text-sm text-center">{authError}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;

