// MNC Solar — Letterhead (Typst)
// Compile: typst compile letterhead.typ letterhead.pdf

// ─── COLORS ─────────────────────────────────────────────────────────────
#let navy = rgb("#0F172A")
#let amber = rgb("#F59E0B")
#let white = rgb("#FFFFFF")
#let slate-light = rgb("#F8FAFC")
#let slate-dark = rgb("#334155")
#let slate-text = rgb("#64748B")
#let slate-muted = rgb("#CBD5E1")
#let slate-label = rgb("#94A3B8")
#let border-light = rgb("#E2E8F0")

// ─── LAYOUT CONSTANTS ──────────────────────────────────────────────────
#let page-w = 210mm
#let side-pad = 18mm
#let top-band = 38mm   // navy + amber + contact strip
#let bot-band = 46mm   // addresses + navy bar

// ─── HEADER ─────────────────────────────────────────────────────────────
#let header-block = [

  // Navy brand band
  #block(
    fill: navy,
    stroke: none,
    outset: (top: 7mm, bottom: 11mm, left: side-pad, right: side-pad),
  )[
    #set text(fill: white)
    #grid(
      columns: (1fr, 1fr),
      column-gutter: 8mm,
      align: (left + horizon, right + horizon),
      // Left: wordmark
      [
        #grid(
          columns: (48pt, 1fr),
          [#image("images/MNC SOLAR (1).png", width: 40pt)],
          [
            #text(size: 26pt, weight: "bold")[MNC ]#text(size: 26pt, weight: "bold", fill: amber)[SOLAR]#text(
              size: 9pt,
              fill: slate-muted,
              baseline: -10pt,
            )[ ™]
            #v(0.1mm)
            #text(size: 7pt, tracking: 2pt, fill: amber, weight: "bold")[POWERING JHARKHAND & BIHAR]
          ],
        )
      ],
      // Right: certifications
      {
        set text(size: 8pt, tracking: 1pt, weight: "bold", fill: white)
        set align(right)
        stack(
          spacing: 2mm,
          [#text(fill: amber)[●]#h(4pt)ISO 9001:2015 CERTIFIED],
          [#text(fill: amber)[●]#h(4pt)PMSG · GOVT. OF BIHAR VENDOR],
          [#text(fill: amber)[●]#h(4pt)MSME REGISTERED],
        )
      },
    )
  ]

  #line(length: 100%, stroke: amber)

  // Contact strip
  #block(
    width: 100%,
    stroke: none,
    outset: (left: side-pad, right: side-pad),
  )[
    #set align(center)
    #set text(size: 8pt, weight: "bold", fill: amber)
    +91 96438 05595#text(fill: slate-text)[#h(8pt)•#h(8pt)]contact\@mncsolar.com#text(fill: slate-text)[#h(8pt)•#h(8pt)]www.mncsolar.com
  ]
]

// ─── FOOTER ─────────────────────────────────────────────────────────────
#let addr-block(label, city, lines, primary: false) = {
  let lbl-color = if primary { amber } else { slate-label }
  let bord-color = if primary { amber } else { border-light }
  let bord-weight = if primary { 1.5pt } else { 0.5pt }
  block(
    inset: (left: 3mm, top: 0.5mm, bottom: 1.5mm),
    stroke: (left: bord-weight + bord-color),
    [
      #text(size: 7pt, tracking: 1.5pt, weight: "bold", fill: lbl-color)[#upper(label)]

      #text(size: 11pt, weight: "bold", fill: navy)[#city]

      #text(size: 8pt, fill: slate-text)[#lines.join(linebreak())]
    ],
  )
}

#let footer-block = [

  // Three address columns
  #block(
    width: page-w - side-pad,
    inset: (left: -side-pad, bottom: 3mm),
    stroke: none,
  )[
    #line(length: 100%, stroke: amber)
    #block(inset: (left: 2mm))[
      #grid(
        columns: (1fr, 1fr, 1fr),
        column-gutter: 6mm,
        addr-block(
          "Regd. Office",
          "Ranchi",
          (
            "3A Classics, Sarkar Mansion,",
            "Circular Road, Ranchi,",
            "Jharkhand — 834001",
          ),
          primary: true,
        ),
        addr-block(
          "Branch Office",
          "Patna",
          (
            "C1, Road No. 1, Maurya Vihar",
            "Colony, Khagaul, Patna,",
            "Bihar — 801105",
          ),
        ),
        addr-block(
          "Branch Office",
          "Delhi NCR",
          (
            "GF-55, Ashiana Greens,",
            "Indirapuram, Ghaziabad,",
            "Uttar Pradesh — 201010",
          ),
        ),
      )]
  ]
  // Navy bottom bar
  #block(
    width: 100%,
    fill: navy,
    outset: (top: 3mm, bottom: 3mm, left: side-pad, right: side-pad),
    stroke: none,
  )[
    #grid(
      columns: (1fr, auto),
      column-gutter: 6mm,
      align: (left + horizon, right + horizon),
      {
        set text(size: 8pt)
        [#text(fill: slate-muted)[GST ]#text(fill: white, weight: "bold")[20ACKPA6933C1Z9]#h(6pt)#text(
            fill: slate-dark,
          )[|]#h(6pt)#text(fill: slate-muted)[MSME Udyam ]#text(
            fill: white,
            weight: "bold",
          )[JH\u{2011}20\u{2011}0075236]]
      },
      text(size: 8pt, tracking: 2.5pt, weight: "bold", fill: amber)[CLEAN ENERGY · SINCE 2019],
    )
  ]
]

// ─── TEMPLATE ───────────────────────────────────────────────────────────
// Use from another file:
//   #import "letterhead.typ": with-letterhead
//   #show: with-letterhead
//   ... your content ...
#let with-letterhead(body) = {
  set page(
    paper: "a4",
    margin: (top: top-band + 2mm, bottom: bot-band + 2mm, x: side-pad),
    header-ascent: 14mm,
    footer-descent: 11mm,
    header: header-block,
    footer: footer-block,
    background: place(
      center + horizon,
      image("letterhead-watermark.png", width: 100mm),
    ),
  )
  set text(font: "Liberation Sans", size: 10pt, fill: slate-dark)
  set par(leading: 0.65em, spacing: 0.9em, justify: true)
  body
}

// ─── STANDALONE OUTPUT (blank letterhead) ──────────────────────────────
#show: with-letterhead

#v(1fr)
