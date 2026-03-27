<!-- .slide: class="dark" -->

<div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; height: 700px;">
<h1>Publication tool proof of concept</h1>
<p>25 March 2026</p>
</div>


---
## Current workflow

<div class="flow">
  <div class="flow-step">Author writes in Word</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">Creates PDF</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">Opens application, uploads PDF</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">Publishes</div>
</div>

---

<!-- .slide: data-background-image="images/raychel-sanner-1cJXplTxrmI-unsplash.jpg" data-background-size="cover" -->

<div class="overlay fragment">

<h2 class="fragment">Problem statements</h2>

<ul>
<li class="fragment">Full briefings not available as html</li>
<li class="fragment">Manual process for creating PDFs</li>
<li class="fragment">Cost of Adobe Acrobat licences</li>
<li class="fragment">Complex, fragile, templates</li>
</ul>

More problems? Add to the chat.<!-- .element: class="fragment" -->
</div>

---
## Assumptions (check them)

- Customers need printable version
- We will still want to make briefings available in hard copy
- We still need to update documents
- Any more?

---

## Proof of concept: scope

- Word to HTML conversion
- HTML to PDF conversion
- Re-editing in basic Word templates

**Not considering**:

- Other authoring tools
- Support model

---

## Word to HTML

- Chosen option - Mammoth package in python
- Widely used; simple; clean html; configurable
- https://github.com/mwilliamson/python-mammoth
- `mammoth document.docx output.html --style-map=custom-style-map`
- ✅ Full briefings available as html (with some editing)

---

## HTML to PDF

- CSS (Custom Style Sheets) can do this.
- Print function in browser can be used to apply styles.
- More functionality available through scripting
- Options: [Prince XML](https://www.princexml.com/); [Docraptor](https://docraptor.com/); [**WeasyPrint**](https://weasyprint.org/)
- Choice: WeasyPrint - free; has all necessary features
   - Footnotes, TOCs, accessible, PDF bookmarks

### 🛑 Need to build application to test!


Note: To produce PDFs, we need more than just content, we need author, images, dates, etc.

---

<!-- .slide: class="feature" -->

## Demo


---

## What have we demonstrated?

- Get good HTML from our Word files.
- Get near-equivalent PDFs from the HTML
- Round-trip - update using Word generated from HTML
   - No archive of Word files!

<div class="fragment">
<h2>Not done yet</h2>

- Images, charts, tables
- Implement accessible format
- PDF tidying
</div>

---

## Comparison with XML

| Pros | Cons |
|------|------|
| Less business change | Limits on structure |
| No new authoring tool - time and £££| No modular text |
| Quicker path to benefits | Other teams might need XML |
| Staggered transition ||



**Tentative recommendation: HTML => PDF as first step**

---

<!-- .slide: class="feature" -->

## Any thoughts?

