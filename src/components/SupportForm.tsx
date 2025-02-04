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

// Definição do schema de validação
const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres").max(50),
  title: z.string().min(2, "O título deve ter no mínimo 2 caracteres").max(50),
  description: z
    .string()
    .min(2, "A descrição deve ter no mínimo 2 caracteres")
    .max(50),
});

const SupportForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 border-2 w-[400px] h-[500px] p-8 rounded-md drop-shadow-md "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <div className="h-[1rem]">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Título da solicitação" {...field} />
              </FormControl>
              <div className="h-[1rem]">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Descrição da solicitação" {...field} />
              </FormControl>
              <div className="h-[1rem]">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="flex justify-end bottom-0 flex-col gap-2">
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </Form>
  );
};

export default SupportForm;
