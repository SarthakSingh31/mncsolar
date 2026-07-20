// MNC Solar — On-Grid Three-Phase Quotation template
// Imports letterhead styles and exports a `quote()` function taking customer + capacity params.

#import "letterhead.typ": amber, border-light, navy, slate-dark, slate-label, slate-light, slate-text, with-letterhead

#let section-title(t) = {
  v(3mm)
  block(text(size: 11.5pt, weight: "bold", fill: navy, t))
}

#let table-stroke = 0.4pt + border-light

// Facilities (2-col spec table)
#let facilities(capacity, energy, array) = table(
  columns: (38%, 62%),
  stroke: table-stroke,
  inset: 2.2mm,
  align: (left + horizon, left + horizon),
  fill: (_, y) => if y == 0 { slate-light } else { none },
  table.header(text(weight: "bold", fill: navy)[Facilities], text(weight: "bold", fill: navy)[Rooftop]),
  [Type of Installation], [On-Grid Rooftop System],
  [Phase], [Three],
  [Estimated Capacity], text(weight: "bold")[#capacity KWp],
  [Preferred Technology], [TOPCon – ½ Cut Cell, Bifi],
  [Estimated Energy Generation], [#energy Units per Year],
  [Solar Array Area], [#array Sft],
  [Project Mode], [Capex],
  [Project Rationale], [Asset for 25 Years],
)

// Bill of Material (4-col)
#let bill-of-material(panels, total-w, inverter-size) = table(
  columns: (8%, 16%, 48%, 28%),
  stroke: table-stroke,
  inset: 2.2mm,
  align: (center + horizon, left + horizon, left + top, left + top),
  fill: (_, y) => if y == 0 { slate-light } else { none },
  table.header(
    text(weight: "bold", fill: navy)[Sr\ No],
    text(weight: "bold", fill: navy)[Item],
    text(weight: "bold", fill: navy)[Specification],
    text(weight: "bold", fill: navy)[Make],
  ),
  [1],
  [Solar Pv Modules],
  [TOPCon – ½ Cut Cell PV Module with Efficiency > 22.20 % with IS 14286, IS 61215 and IS-61730 certification. Performance Warranty of 25 years (80% module efficiency after 25 years)],
  [Loom Solar / Statcon Energiaa \ \ 575–620 Wp TOPCon Bifi. \ \ No. of Panels – #panels \ \ 600 W × #panels = #total-w W],

  [2],
  [Module Mounting Structure],
  [Hot Dip / Pre-Galvanized / Aluminium / any suitable material with SS nuts and bolts. Designed to withstand wind speed and seismic factors of the site.],
  [MNRE / I.S / Universal Standard / Equivalent],

  [3], [Junction Boxes], [Dust, Vermin and water proof made from FRP.], [MNRE / I.S Standard / Equivalent],

  [4],
  [On-Grid Inverter \ \ #inverter-size],
  [Three Phase String Inverters Ideal for roof top systems complying with all requirements in Die Cast aluminium case, IP66 water proof and dustproof, C5 anti corrosion. High MPP tracking and a wide input voltage range to ensure high levels of efficiency even at low irradiation, to achieve an efficiency of up to 98.3%. With 10 Years of Warranty.],
  [Loom Solar],

  [5],
  [Distribution Boxes, Cables and Accessories],
  [An ACDB/AJB shall be provided in between PCU Load/Grid interface of suitable rating for connection and disconnection of PCU from load. Class 1 Energy Meter for Solar Power monitoring.],
  [Havells / Paraflex / Polycab / Universal],
)

// Offer table
#let offer(capacity, rate, total) = table(
  columns: (1fr, 14%, 16%, 20%),
  stroke: table-stroke,
  inset: 2.2mm,
  align: (left + horizon, center + horizon, center + horizon, center + horizon),
  fill: (_, y) => if y == 0 { slate-light } else { none },
  table.header(
    text(weight: "bold", fill: navy)[Item],
    text(weight: "bold", fill: navy)[Capacity (KWp)],
    text(weight: "bold", fill: navy)[Rate/KWp],
    text(weight: "bold", fill: navy)[Total Price],
  ),
  [Design, Manufacture, Supply of #capacity KWp On-Grid Solar PV System with Solar Module and other Accessories and Connecting cables etc.],
  [#capacity KWp],
  [#rate],
  text(weight: "bold")[#total],
)

// GST / Totals
#let gst-totals(total, in-words) = table(
  columns: (40%, 60%),
  stroke: table-stroke,
  inset: 2.2mm,
  align: (left + horizon, left + horizon),
  fill: (_, y) => if y == 0 { slate-light } else { none },
  table.header(text(weight: "bold", fill: navy)[GST Inclusive], []),
  [Total Taxpaid Amount], text(weight: "bold")[#total],
  [Beneficiary Out Flow Share], text(weight: "bold")[#total],
  [In Words], [Rs. #in-words],
)

// ─── QUOTE ──────────────────────────────────────────────────────────────
// Wraps the whole document in the letterhead and renders the quotation.
#let quote(
  date: "19-04-2026",
  customer: "",
  address-line: "",
  city-state-pin: "",
  capacity: "", // e.g. "10"
  energy: "", // e.g. "14500 – 15500"
  array: "", // e.g. "750 – 850"
  panels: "", // e.g. "18"
  panel-total-w: "", // e.g. "10800"
  inverter-size: "", // e.g. "10 KW"
  rate-per-kwp: "", // e.g. "50,510/-"
  total-price: "", // e.g. "5,05,100/-"
  total-in-words: "",
) = {
  show: with-letterhead
  set par(leading: 0.65em, spacing: 0.9em, justify: true)
  set text(size: 10pt)

  [
    #align(right)[#text(weight: "bold")[Date – #date]]

    To,\
    Billing Unit – #text(weight: "bold")[#customer]\
    #address-line\
    #city-state-pin

    #v(2mm)

    #text(weight: "bold")[Sub:] Offer for Three Phase On-Grid Rooftop Solar Power Plant #capacity KW Rooftop System using NON-DCR ½ Cut TOPCon Bifacial PV Modules.

    Dear Sir,

    We thank you for your enquiry and have pleasure to offer our quotation for the same:

    #v(2mm)

    #facilities(capacity, energy, array)

    #section-title[Bill of Material and Make]
    #bill-of-material(panels, panel-total-w, inverter-size)

    #section-title[MNC Solar Offer]
    #offer(capacity, rate-per-kwp, total-price)

    #v(2mm)
    #gst-totals(total-price, total-in-words)

    #section-title[Payment Terms & Conditions]
    + 90% Advance along with Confirm Work Order.
    + 10% Upon Installation of 10KWp On-Grid Rooftoop Solar Plant.

    #section-title[Schedule of Supply and Installation]
    The supply and installation will be completed within 10 days from the date of receipt of Contract and Advance.

    #section-title[Note]
    + New Smart Meter will be installed in place of old meter in case old meter is post paid.
    + Load will be changed to solar plant load if the load sanctioned is less.

    #section-title[Detailed Scope of Work]
    The scope of work for the installer includes study of the rooftop of buildings, complete design, engineering, manufacture, supply, storage, civil work, erection, testing & commissioning of the grid connected rooftop solar power project as per the norms of the CEA and local DISCOM.

    Under Scope of Work will do following activities:

    + Solar Plant Engineering Design.
    + Detailed Planning and Smooth execution of the Project.
    + Supply of the PV Modules, Mounting System and On-Grid Inverter with necessary accessories for On-Site installation. Please note that since Non DCR PV modules are imported, their availability of exact wattage as mentioned in the quotation is challenging. Therefore wattage of 550 to 620 of exactly the same design, technology and company may be installed. This will not affect the efficiency.
    + System installation and commissioning of system.
    + Basic Training on working and Up-keep to Operate and Maintenance staff.
    + System analysis, technical reports and recommendations.
    + NOC/Permission from local DISCOM/Nodal Agencies for connecting SPV power plant to grid.
    + Application for Net Metering Installation and Commissioning.
    + Appropriate AC Cable Length from inverters to the Solar LT Panel placed near to the inverter at appropriate location will be in scope of the installer however AC Cable from Solar LT Panel more than 20 meters will be in scope of client.
    + Company's Warranty for the modules and the Inverter will be provided to the customer.

    #section-title[Assumptions]
    + All approvals, NOCs and permissions are in scope of MNC Solar.
    + Any other related work or arrangement like Material Storage location, way for working at roof required for the execution of the installation of the project will be in the scope of Client.
    + Electricity at roof for working will be in the scope of Client.

    #v(2mm)
    We assure you to give best services always in time so we are waiting for your valued order.

    Your early reply is highly appreciated.

    #v(2mm)
    Thanking you,

    #v(4mm)
    #text(weight: "bold", size: 11pt, fill: navy)[MNC SOLAR]\
    #text(size: 9pt, fill: slate-text)[An ISO 9001:2015 Certified Company]\
    #text(size: 9pt, fill: slate-text)[An Authorized PMSG Vendor]

    #v(3mm)
    #block(
      fill: slate-light,
      inset: 3mm,
      stroke: (left: 1.5pt + amber),
      width: 100%,
    )[
      #text(size: 8.5pt, tracking: 1.2pt, weight: "bold", fill: amber)[BANKING DETAILS]\
      #v(1mm)
      #text(size: 9.5pt)[
        Bank: #text(weight: "bold")[Canara Bank]\
        A/c Number: #text(weight: "bold")[120029492096]\
        A/c Holder Name: #text(weight: "bold")[Mahadeva and Company]\
        IFSC Code: #text(weight: "bold")[CNRB0017538]\
        Branch: Opp. Ratu Block Office, Kathitand, Ratu, Ranchi, Jharkhand
      ]
    ]
  ]
}
