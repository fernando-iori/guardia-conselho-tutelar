# Guardiã — Site sobre o Conselho Tutelar e o ECA

Site institucional e educativo desenvolvido como Projeto de Extensão Universitária do curso de **Análise e Desenvolvimento de Sistemas** (UNIASSELVI), em parceria com o **Conselho Tutelar de Nova Cantu**.

O objetivo do projeto é disponibilizar, em linguagem acessível, informações sobre o Estatuto da Criança e do Adolescente (ECA) e sobre o funcionamento do Conselho Tutelar, facilitando o acesso da comunidade a esse conteúdo e aos canais oficiais de denúncia.

🔗 Site aprovado pelo Conselho Tutelar de Nova Cantu como entrega final do projeto de extensão.

## Estrutura do projeto

```
site/
├── index.html              Página inicial
├── eca.html                 O que é o ECA
├── conselho-tutelar.html    O que é o Conselho Tutelar
├── direitos.html             Direitos da criança e do adolescente
├── noticias.html             Notícias e avisos
├── faq.html                  Perguntas frequentes
├── contato.html               Fale com a gente
├── como-denunciar.html        Como denunciar
├── sobre-o-projeto.html       Sobre o projeto de extensão
├── 404.html                   Página não encontrada
├── css/style.css              Estilos do site
├── js/script.js                Interações e animações
└── img/                        Imagens e logotipos
```

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (variáveis CSS, grid e flexbox, sem frameworks)
- JavaScript puro (sem dependências)
- Google Fonts: Libre Caslon Display, Public Sans, IBM Plex Mono

## Como visualizar localmente

Não é necessário nenhum servidor ou build — basta abrir o arquivo `site/index.html` diretamente no navegador, ou servir a pasta `site/` com qualquer servidor estático:

```bash
cd site
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Sobre o projeto de extensão

- **Instituição:** UNIASSELVI — Centro Universitário Leonardo da Vinci
- **Curso:** Análise e Desenvolvimento de Sistemas
- **Instituição concedente:** Conselho Tutelar de Nova Cantu
- **Carga horária:** 149 horas
- **Ano:** 2026

## Créditos

Conteúdo institucional, logotipo e informações de contato cedidos pelo Conselho Tutelar de Nova Cantu. Base legal do conteúdo: Lei Federal nº 8.069/1990 (Estatuto da Criança e do Adolescente).
