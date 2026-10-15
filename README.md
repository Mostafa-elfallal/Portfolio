# Portfolio

Source for [mostafa-elfallal.github.io/Portfolio](https://mostafa-elfallal.github.io/Portfolio/), the personal site of Mostafa ElFallal, Embedded Linux Engineer based in Cairo.

The site is static HTML, CSS and JavaScript with no build step. GitHub Pages serves it from the `main` branch.

## Structure

| Path | Contents |
|---|---|
| `index.html` | Page layout and static text |
| `js/data.js` | All content: skills, experience, projects, certifications |
| `js/*.js` | Rendering for each section, navigation and animations |
| `css/` | Styles, one file per section; colours and spacing in `variables.css` |

To update the content, edit `js/data.js`. To preview locally:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

The contact form has no backend. It opens the visitor's email client with the message filled in.

## Contact

- Email: [mostafaelfallal90@gmail.com](mailto:mostafaelfallal90@gmail.com)
- LinkedIn: [mostafa-el-fallal](https://www.linkedin.com/in/mostafa-el-fallal-337510127/)
- GitHub: [Mostafa-elfallal](https://github.com/Mostafa-elfallal)

## License

See [LICENSE](LICENSE).
