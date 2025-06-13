# Afrocursos Site

Este repositório contém as páginas estáticas do site **Afrocursos**.

## Abrindo as Páginas

Abra qualquer arquivo `pagina*.html` em seu navegador. Cada página possui links para os cursos armazenados na pasta `cursos/`.

## Executando os testes

É possível validar automaticamente se todos os links de cursos apontam para arquivos existentes. Para rodar os testes, execute:

```bash
python -m unittest discover -s tests
```

Os testes estão localizados em `tests/test_links.py`.
