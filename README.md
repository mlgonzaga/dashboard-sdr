# Projeto SDR

A interface do projeto é composta por um menu com as opções: dashboard, upload de arquivos e suporte.

![Navbar](https://prod-files-secure.s3.us-west-2.amazonaws.com/1e15eb47-be16-4724-b8a6-f06d2e1459df/ec87877d-ee0f-4df0-a63a-37ed53db9d2b/image.png)

## Dashboard:
  Irá exibir os dados dos leads que entrarem pelo whatsapp e exibir de acordo com a data selecionada, a quantidade baseada nos status. Ex: Leads que entraram, Leads qualificados, Custo de qualificação, Leads que foram pro closer e Custo de qualificação.

  <img src="/dashboard-sdr/images-readme/dashboard.png"/>


## Upload de arquivos:
  Irá disponibilzar uma área onde o usuário poderá arrastar ou anexar um arquivo(PDF ou txt).

![Upload](https://prod-files-secure.s3.us-west-2.amazonaws.com/1e15eb47-be16-4724-b8a6-f06d2e1459df/6421ca8f-7984-4eda-9294-4751700ffaec/image.png)

## Suporte:
  Irá exibir um formulário para criação de um ticket de  suporte com Nome, Título e Descrição do problema.

![Suporte](https://prod-files-secure.s3.us-west-2.amazonaws.com/1e15eb47-be16-4724-b8a6-f06d2e1459df/e77a8b14-c1d1-44d4-b054-790a315cf459/image.png)


# Tecnologias utilizadas

  A interface é construida com o framework [React](https://react.dev/) utilizando a ferramenta [Vite](https://vite.dev/) para criação do projeto inicial, [TypeScript](https://www.typescriptlang.org/)  para tipagem dos dados, [TailwindCSS](https://tailwindcss.com/) para estilização dos componentes, [Lucide](https://lucide.dev/guide/packages/lucide-react) para ícones, a biblioteca [Echarts](https://echarts.apache.org/examples/en/editor.html?c=funnel) para o grafico de funil, [React-datepicker](https://reactdatepicker.com/) junto com [date-fns](https://date-fns.org/) para criar o o componente CustomDatePicker.tsx, [Shadcn-ui](https://ui.shadcn.com/docs) para criar o formulário de suporte e por fim [React-Hook-Fom](https://ui.shadcn.com/docs/components/form) junto com [Zod](https://zod.dev/) para validação de dados do formulário.





