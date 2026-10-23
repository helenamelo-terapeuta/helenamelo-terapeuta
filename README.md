# Helena Melo

Site da Helena Melo, terapeuta holística, em português de Portugal.

## Correr em local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

O repositório fica na tua máquina até o sincronizares com o GitHub.

## GitHub Pages

`npm run build` gera a pasta `out`. É essa pasta que o GitHub Pages publica. O site não precisa de um servidor Node.

Há um workflow em `.github/workflows/pages.yml`. Depois de criares o remoto e fazeres push para `main`:

1. No repositório, abre Settings → Pages.
2. Em Build and deployment, escolhe GitHub Actions.

O endereço público assume a raiz do domínio (`https://helenamelo.pt` ou um site de utilizador `https://utilizador.github.io`). Se a página ficar num subendereço, como `https://utilizador.github.io/helena-melo`, define a variável de repositório `BASE_PATH` com o valor `/helena-melo` e volta a correr o workflow. Podes também definir `SITE_URL` com o endereço final.

Para ver o resultado antes de publicar, abre o endereço no browser. Não abras o `index.html` com dois cliques: os estilos começam em `/_next` e o browser procura-os na raiz do disco, por isso a página aparece sem formatação.

```bash
npm run build
npm run preview
```

Depois abre [http://localhost:4173](http://localhost:4173).

## Antes de publicar

- Troca as fotografias em `public/images`. São imagens temporárias e não são retratos da Helena.
- Confirma o domínio em `src/content/site.ts` (`url`) ou define `NEXT_PUBLIC_SITE_URL`.
- O botão de contacto abre as mensagens do Instagram: `https://ig.me/m/helenamelo.pt`.
- O telefone é `+351 910 298 644`.

## Páginas de serviço

Cada serviço vive em `src/content/services.ts`, com texto, perguntas frequentes e imagem. A partir daí a página, os metadados, o sitemap e os dados estruturados são gerados em `/servicos/[slug]`.

Para acrescentar uma área nova, adiciona um objeto a `services`. O endereço fica `/servicos/o-slug`.

## Instagram

A grelha da página inicial é uma seleção editorial em `src/content/instagram.ts`. Cada entrada pode passar a usar o endereço real da publicação (`href`) e uma fotografia (`image`). Ainda não há ligação automática à API do Instagram.
