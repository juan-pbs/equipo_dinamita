# Portal del Equipo

Proyecto colaborativo de la Unidad II — Control de Versiones.

## Integrantes y roles

| Integrante                  | Rol          | Rama                   |
| --------------------------- | ------------ | ---------------------- |
| Juan Pablo Barrera Santiago | Líder / HTML | `feature/html-barrera` |
| Nayeli Ortiz Dimas          | CSS          | `feature/css-ortiz`    |
| Carlos Jacobo Pérez Pérez   | JavaScript   | `feature/js-perez`     |

## Tecnologías usadas

- HTML semántico
- CSS responsivo
- JavaScript DOM
- localStorage
- Git y GitHub Flow

## Clonado por SSH

```bash
git clone git@github.com:JuanBarrera/portal-equipo.git
cd portal-equipo
```

## Flujo de trabajo

```bash
git checkout main
git pull origin main
git checkout -b feature/[rol]-[apellido]
git push -u origin feature/[rol]-[apellido]
```

## Ramas del equipo

```bash
feature/html-barrera
feature/css-ortiz
feature/js-perez
```

## Orden de integración

1. Pull Request de HTML.
2. Pull Request de CSS.
3. Pull Request de JavaScript.

## Cómo probar el sitio

1. Abrir `index.html` en el navegador.
2. Revisar la sección de portafolio.
3. Probar el formulario de contacto.
4. Verificar que los mensajes se guarden en localStorage.
