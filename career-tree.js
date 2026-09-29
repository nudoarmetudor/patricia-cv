/* ============================================================
   Patricia Dița - Career Tree
   D3.js Career Pathways Visualization
   ============================================================ */

"use strict";


/* ============================================================
   STATE
   ============================================================ */

let careerTreeZoom = null;

let activeCareerTrack = "ALL";


/* ============================================================
   CAREER TREE DATA
   ============================================================

   IMPORTANT:
   Keep the existing `careerTreeData` object from index.html
   here.

   The rest of the application does not need to know anything
   about the internal structure of the tree.
   ============================================================ */

const careerTreeData = {

    name: "Patricia Dița",

    title: "Profil Profesional",

    level: "Punct de plecare",

    color: "#10b981",

    desc:
        "Profil profesional construit pe baza experienței în leadership, voluntariat, proiecte, comunicare, evenimente și dezvoltare personală.",

    cvBridge:
        "Experiența educațională, voluntariatul, proiectele și activitățile de leadership din CV.",

    skills: [
        "Leadership",
        "Comunicare",
        "Management de proiect",
        "Organizare",
        "Lucru în echipă"
    ],

    children: [

        /* ====================================================
           EV
           ==================================================== */

        {
            name: "Cultură & Evenimente",

            title:
                "Management Cultural & Evenimente",

            level:
                "Direcție strategică",

            trackCode: "EV",

            color: "#3b82f6",

            desc:
                "Direcție profesională bazată pe experiența în organizarea de evenimente, proiecte culturale și activități pentru comunitate.",

            cvBridge:
                "Experiența în organizarea evenimentelor, proiectelor și activităților pentru tineri.",

            skills: [
                "Event Management",
                "Logistică",
                "Coordonare",
                "Leadership",
                "Comunicare"
            ],

            children: [

                {
                    name: "Coordonator Evenimente",

                    title:
                        "Event & Project Coordinator",

                    level:
                        "Rol profesional",

                    trackCode: "EV",

                    color: "#60a5fa",

                    desc:
                        "Coordonarea logisticii, echipelor, furnizorilor și activităților pentru evenimente.",

                    cvBridge:
                        "Experiența acumulată în organizarea și coordonarea evenimentelor.",

                    skills: [
                        "Planificare",
                        "Bugetare",
                        "Logistică",
                        "Coordonare echipă"
                    ]
                },

                {
                    name: "Manager Cultural",

                    title:
                        "Cultural Project Manager",

                    level:
                        "Evoluție profesională",

                    trackCode: "EV",

                    color: "#60a5fa",

                    desc:
                        "Dezvoltarea și gestionarea proiectelor culturale și comunitare.",

                    cvBridge:
                        "Experiența în proiecte culturale și activități comunitare.",

                    skills: [
                        "Project Management",
                        "Cultură",
                        "Parteneriate",
                        "Comunicare"
                    ]
                }
            ]
        },


        /* ====================================================
           MKT
           ==================================================== */

        {
            name: "PR & Marketing",

            title:
                "PR, Social Media & Marketing",

            level:
                "Direcție strategică",

            trackCode: "MKT",

            color: "#8b5cf6",

            desc:
                "Direcție profesională construită în jurul comunicării, promovării, social media și brandingului.",

            cvBridge:
                "Experiența în comunicare, promovare și activități de marketing.",

            skills: [
                "PR",
                "Social Media",
                "Marketing",
                "Copywriting",
                "Branding"
            ],

            children: [

                {
                    name: "Specialist PR",

                    title:
                        "Public Relations Specialist",

                    level:
                        "Rol profesional",

                    trackCode: "MKT",

                    color: "#a78bfa",

                    desc:
                        "Gestionarea comunicării publice și a relațiilor cu partenerii și comunitatea.",

                    cvBridge:
                        "Experiența în comunicare și interacțiunea cu diferite grupuri.",

                    skills: [
                        "PR",
                        "Comunicare",
                        "Networking",
                        "Media"
                    ]
                },

                {
                    name: "Social Media Manager",

                    title:
                        "Social Media & Content Manager",

                    level:
                        "Evoluție profesională",

                    trackCode: "MKT",

                    color: "#a78bfa",

                    desc:
                        "Planificarea și dezvoltarea conținutului pentru canale digitale și social media.",

                    cvBridge:
                        "Experiența în promovarea proiectelor și activităților.",

                    skills: [
                        "Content Creation",
                        "Social Media",
                        "Copywriting",
                        "Analytics"
                    ]
                }
            ]
        },


        /* ====================================================
           POL
           ==================================================== */

        {
            name: "Politici Publice & ONG",

            title:
                "Politici Publice, ONG & Liderism",

            level:
                "Direcție strategică",

            trackCode: "POL",

            color: "#f59e0b",

            desc:
                "Direcție profesională orientată spre sectorul asociativ, politici publice, advocacy și leadership civic.",

            cvBridge:
                "Experiența de voluntariat, leadership și implicare civică.",

            skills: [
                "Leadership",
                "Advocacy",
                "Politici Publice",
                "Voluntariat",
                "Management"
            ],

            children: [

                {
                    name: "Coordonator ONG",

                    title:
                        "NGO Project Coordinator",

                    level:
                        "Rol profesional",

                    trackCode: "POL",

                    color: "#fbbf24",

                    desc:
                        "Coordonarea proiectelor și echipelor din cadrul organizațiilor neguvernamentale.",

                    cvBridge:
                        "Experiența în voluntariat și coordonarea proiectelor.",

                    skills: [
                        "Project Management",
                        "Leadership",
                        "Granturi",
                        "Community Engagement"
                    ]
                },

                {
                    name: "Policy Specialist",

                    title:
                        "Public Policy Specialist",

                    level:
                        "Evoluție profesională",

                    trackCode: "POL",

                    color: "#fbbf24",

                    desc:
                        "Analizarea problemelor publice și dezvoltarea de propuneri și inițiative.",

                    cvBridge:
                        "Experiența de leadership și implicare în proiecte comunitare.",

                    skills: [
                        "Research",
                        "Policy Analysis",
                        "Advocacy",
                        "Writing"
                    ]
                }
            ]
        },


        /* ====================================================
           SCI
           ==================================================== */

        {
            name: "Cercetare & Analytics",

            title:
                "Cercetare Științifică & Analytics",

            level:
                "Direcție strategică",

            trackCode: "SCI",

            color: "#06b6d4",

            desc:
                "Direcție profesională axată pe analiză, cercetare, date și dezvoltarea de proiecte bazate pe dovezi.",

            cvBridge:
                "Experiența academică, proiectele și dezvoltarea competențelor analitice.",

            skills: [
                "Research",
                "Data Analysis",
                "Critical Thinking",
                "Reporting",
                "Analytics"
            ],

            children: [

                {
                    name: "Research Assistant",

                    title:
                        "Research Assistant",

                    level:
                        "Rol profesional",

                    trackCode: "SCI",

                    color: "#22d3ee",

                    desc:
                        "Sprijinirea proceselor de cercetare, colectare și analiză a datelor.",

                    cvBridge:
                        "Experiența academică și participarea la proiecte de cercetare.",

                    skills: [
                        "Research",
                        "Data Collection",
                        "Analysis",
                        "Documentation"
                    ]
                },

                {
                    name: "Data Analyst",

                    title:
                        "Data & Analytics Specialist",

                    level:
                        "Evoluție profesională",

                    trackCode: "SCI",

                    color: "#22d3ee",

                    desc:
                        "Transformarea datelor în informații utile pentru proiecte și decizii.",

                    cvBridge:
                        "Competențele analitice și experiența acumulată prin proiecte.",

                    skills: [
                        "Data Analysis",
                        "Visualization",
                        "Statistics",
                        "Reporting"
                    ]
                }
            ]
        }
    ]
};


/* ============================================================
   INITIALISE
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * The main application calls setViewMode().
         * We only render immediately if the Career view
         * happens to be active on initial load.
         */
        if (
            typeof currentViewMode !== "undefined" &&
            currentViewMode === "career"
        ) {
            requestAnimationFrame(
                renderCareerTreeView
            );
        }
    }
);


/* ============================================================
   FILTERED DATA
   ============================================================ */

function getCareerTreeData() {

    const data =
        structuredClone
            ? structuredClone(careerTreeData)
            : JSON.parse(
                JSON.stringify(
                    careerTreeData
                )
            );

    if (
        activeCareerTrack === "ALL"
    ) {
        return data;
    }

    data.children =
        (data.children || [])
            .filter(
                child =>
                    child.trackCode ===
                    activeCareerTrack
            );

    return data;
}


/* ============================================================
   RENDER TREE
   ============================================================ */

function renderCareerTreeView() {

    const container =
        document.getElementById(
            "careerTreeContainer"
        );

    const svgElement =
        document.getElementById(
            "careerTreeSvg"
        );

    if (
        !container ||
        !svgElement ||
        typeof d3 === "undefined"
    ) {
        return;
    }

    const width =
        Math.max(
            container.clientWidth,
            700
        );

    const height =
        Math.max(
            container.clientHeight,
            520
        );

    const svg =
        d3.select(
            svgElement
        );

    svg.selectAll("*").remove();

    const data =
        getCareerTreeData();

    const root =
        d3.hierarchy(data);

    const tree =
        d3.tree()
            .nodeSize([
                100,
                270
            ])
            .separation(
                (a, b) =>
                    a.parent === b.parent
                        ? 1.2
                        : 1.7
            );

    tree(root);

    const nodes =
        root.descendants();

    const links =
        root.links();

    const minX =
        d3.min(
            nodes,
            d => d.x
        ) || 0;

    const maxX =
        d3.max(
            nodes,
            d => d.x
        ) || 0;

    const minY =
        d3.min(
            nodes,
            d => d.y
        ) || 0;

    const maxY =
        d3.max(
            nodes,
            d => d.y
        ) || 0;

    const treeWidth =
        maxY - minY;

    const treeHeight =
        maxX - minX;

    svg
        .attr(
            "width",
            width
        )
        .attr(
            "height",
            height
        )
        .attr(
            "viewBox",
            `0 0 ${width} ${height}`
        );

    /*
     * SVG definitions
     */
    const defs =
        svg.append(
            "defs"
        );

    const shadow =
        defs
            .append("filter")
            .attr(
                "id",
                "careerNodeShadow"
            )
            .attr(
                "x",
                "-50%"
            )
            .attr(
                "y",
                "-50%"
            )
            .attr(
                "width",
                "200%"
            )
            .attr(
                "height",
                "200%"
            );

    shadow
        .append(
            "feDropShadow"
        )
        .attr(
            "dx",
            0
        )
        .attr(
            "dy",
            3
        )
        .attr(
            "stdDeviation",
            4
        )
        .attr(
            "flood-opacity",
            0.18
        );


    /*
     * Main drawing group
     */
    const mainGroup =
        svg.append(
            "g"
        );


    /*
     * Links
     */
    const link =
        d3.linkHorizontal()
            .x(
                d => d.y
            )
            .y(
                d => d.x
            );

    mainGroup
        .append("g")
        .attr(
            "class",
            "career-links"
        )
        .selectAll("path")
        .data(links)
        .join("path")
        .attr(
            "class",
            "career-link"
        )
        .attr(
            "d",
            link
        )
        .attr(
            "stroke",
            d =>
                d.target.data.color ||
                "#94a3b8"
        )
        .attr(
            "stroke-width",
            d =>
                d.target.depth === 1
                    ? 4
                    : 2.5
        )
        .attr(
            "stroke-opacity",
            d =>
                d.target.depth === 1
                    ? 0.65
                    : 0.45
        );


    /*
     * Nodes
     */
    const node =
        mainGroup
            .append("g")
            .attr(
                "class",
                "career-nodes"
            )
            .selectAll("g")
            .data(nodes)
            .join("g")
            .attr(
                "class",
                "career-node"
            )
            .attr(
                "transform",
                d =>
                    `translate(${d.y},${d.x})`
            );


    /*
     * Main circles
     */
    node
        .append("circle")
        .attr(
            "r",
            d => {

                if (
                    d.depth === 0
                ) {
                    return 24;
                }

                if (
                    d.depth === 1
                ) {
                    return 18;
                }

                return 12;
            }
        )
        .attr(
            "fill",
            d =>
                d.data.color ||
                "#10b981"
        )
        .attr(
            "stroke",
            "#ffffff"
        )
        .attr(
            "stroke-width",
            d =>
                d.depth === 0
                    ? 4
                    : 2.5
        )
        .attr(
            "filter",
            "url(#careerNodeShadow)"
        );


    /*
     * Inner circles
     */
    node
        .append("circle")
        .attr(
            "r",
            d =>
                d.depth === 0
                    ? 7
                    : d.depth === 1
                        ? 5
                        : 3
        )
        .attr(
            "fill",
            "#ffffff"
        )
        .attr(
            "opacity",
            0.9
        );


    /*
     * Main label
     */
    node
        .append("text")
        .attr(
            "class",
            "career-node-label"
        )
        .attr(
            "x",
            d =>
                d.depth === 0
                    ? -34
                    : 25
        )
        .attr(
            "y",
            -5
        )
        .attr(
            "text-anchor",
            d =>
                d.depth === 0
                    ? "end"
                    : "start"
        )
        .attr(
            "font-size",
            d =>
                d.depth === 0
                    ? "15px"
                    : d.depth === 1
                        ? "13px"
                        : "11px"
        )
        .attr(
            "font-weight",
            d =>
                d.depth <= 1
                    ? 800
                    : 650
        )
        .attr(
            "fill",
            "currentColor"
        )
        .text(
            d =>
                d.data.name
        );


    /*
     * Level label
     */
    node
        .append("text")
        .attr(
            "class",
            "career-node-label"
        )
        .attr(
            "x",
            d =>
                d.depth === 0
                    ? -34
                    : 25
        )
        .attr(
            "y",
            14
        )
        .attr(
            "text-anchor",
            d =>
                d.depth === 0
                    ? "end"
                    : "start"
        )
        .attr(
            "font-size",
            "9px"
        )
        .attr(
            "fill",
            "#64748b"
        )
        .text(
            d =>
                d.data.level || ""
        );


    /*
     * Click
     */
    node.on(
        "click",
        (
            event,
            d
        ) => {

            event.stopPropagation();

            showCareerNodePanel(
                d.data
            );
        }
    );


    /*
     * Hover
     */
    node
        .on(
            "mouseenter",
            (
                event,
                d
            ) => {

                const radius =
                    d.depth === 0
                        ? 29
                        : d.depth === 1
                            ? 22
                            : 15;

                d3.select(event.currentTarget)
                    .select("circle")
                    .transition()
                    .duration(150)
                    .attr(
                        "r",
                        radius
                    );

                mainGroup
                    .selectAll(
                        ".career-link"
                    )
                    .attr(
                        "stroke-opacity",
                        l =>
                            l.source === d ||
                            l.target === d ||
                            isAncestor(
                                l.source,
                                d
                            )
                                ? 0.9
                                : 0.12
                    );
            }
        )
        .on(
            "mouseleave",
            (
                event,
                d
            ) => {

                const radius =
                    d.depth === 0
                        ? 24
                        : d.depth === 1
                            ? 18
                            : 12;

                d3.select(event.currentTarget)
                    .select("circle")
                    .transition()
                    .duration(150)
                    .attr(
                        "r",
                        radius
                    );

                mainGroup
                    .selectAll(
                        ".career-link"
                    )
                    .attr(
                        "stroke-opacity",
                        l =>
                            l.target.depth === 1
                                ? 0.65
                                : 0.45
                    );
            }
        );


    /*
     * Initial information panel
     */
    showCareerNodePanel(
        root.data
    );


    /*
     * Fit tree
     */
    requestAnimationFrame(
        () => {

            fitCareerTree(
                svg,
                mainGroup,
                width,
                height,
                treeWidth,
                treeHeight,
                minX,
                minY
            );
        }
    );


    /*
     * Zoom
     */
    careerTreeZoom =
        d3.zoom()
            .scaleExtent([
                0.35,
                2.5
            ])
            .on(
                "zoom",
                event => {

                    mainGroup.attr(
                        "transform",
                        event.transform
                    );
                }
            );

    svg.call(
        careerTreeZoom
    );
}


/* ============================================================
   FIT TREE
   ============================================================ */

function fitCareerTree(
    svg,
    group,
    width,
    height,
    treeWidth,
    treeHeight,
    minX,
    minY
) {

    const padding = 70;

    const scale =
        Math.min(
            (width - padding * 2) /
                Math.max(
                    treeWidth,
                    1
                ),

            (height - padding * 2) /
                Math.max(
                    treeHeight,
                    1
                ),

            1.1
        );

    const translateX =
        width / 2 -
        scale *
            (minY + treeWidth / 2);

    const translateY =
        height / 2 -
        scale *
            (minX + treeHeight / 2);

    const transform =
        d3.zoomIdentity
            .translate(
                translateX,
                translateY
            )
            .scale(
                scale
            );

    svg
        .transition()
        .duration(450)
        .call(
            careerTreeZoom.transform,
            transform
        );
}


/* ============================================================
   FILTER
   ============================================================ */

function filterCareerTrack(
    track
) {

    activeCareerTrack =
        track;

    document
        .querySelectorAll(
            ".career-track-btn"
        )
        .forEach(
            button => {
                button.classList.remove(
                    "active"
                );
            }
        );

    const active =
        document.getElementById(
            `trackBtn${track}`
        );

    if (active) {
        active.classList.add(
            "active"
        );
    }

    renderCareerTreeView();
}


/* ============================================================
   PANEL
   ============================================================ */

function showCareerNodePanel(
    data
) {

    const panel =
        document.getElementById(
            "careerNodePanel"
        );

    if (!panel) {
        return;
    }

    const badge =
        document.getElementById(
            "panelLevelBadge"
        );

    const title =
        document.getElementById(
            "panelTitle"
        );

    const desc =
        document.getElementById(
            "panelDesc"
        );

    const bridge =
        document.getElementById(
            "panelCvBridge"
        );

    const skills =
        document.getElementById(
            "panelSkills"
        );

    badge.textContent =
        data.level ||
        "Direcție";

    title.textContent =
        data.title ||
        data.name ||
        "";

    desc.textContent =
        data.desc ||
        "";

    bridge.textContent =
        data.cvBridge ||
        "";

    skills.innerHTML =
        (data.skills || [])
            .map(
                skill => `
                    <span
                        class="
                            px-2 py-1
                            rounded-md
                            bg-emerald-50
                            dark:bg-emerald-900/40
                            text-emerald-700
                            dark:text-emerald-300
                            text-[10px]
                            font-bold
                        "
                    >
                        ✓ ${escapeHtml(skill)}
                    </span>
                `
            )
            .join("");

    panel.classList.remove(
        "opacity-0",
        "pointer-events-none",
        "translate-y-4"
    );
}


function closeCareerPanel() {

    const panel =
        document.getElementById(
            "careerNodePanel"
        );

    if (!panel) {
        return;
    }

    panel.classList.add(
        "opacity-0",
        "pointer-events-none",
        "translate-y-4"
    );
}


/* ============================================================
   CONTROLS
   ============================================================ */

function resetCareerTreeZoom() {

    if (
        !careerTreeZoom
    ) {
        return;
    }

    const svg =
        d3.select(
            "#careerTreeSvg"
        );

    fitCareerTree(
        svg,
        svg.select("g"),
        svg.node().clientWidth,
        svg.node().clientHeight,
        1,
        1,
        0,
        0
    );
}


function expandAllCareerTree() {

    activeCareerTrack =
        "ALL";

    activateCareerTrackButton(
        "ALL"
    );

    renderCareerTreeView();
}


function collapseAllCareerTree() {

    /*
     * The tree is static rather than a collapsible
     * hierarchy, so "Restrânge" returns to the
     * strategic overview.
     */
    activeCareerTrack =
        "ALL";

    activateCareerTrackButton(
        "ALL"
    );

    renderCareerTreeView();

    requestAnimationFrame(
        () => {

            if (
                !careerTreeZoom
            ) {
                return;
            }

            d3.select(
                "#careerTreeSvg"
            )
                .transition()
                .duration(400)
                .call(
                    careerTreeZoom.transform,
                    d3.zoomIdentity
                );
        }
    );
}


function activateCareerTrackButton(
    track
) {

    document
        .querySelectorAll(
            ".career-track-btn"
        )
        .forEach(
            button => {
                button.classList.remove(
                    "active"
                );
            }
        );

    const button =
        document.getElementById(
            `trackBtn${track}`
        );

    if (button) {
        button.classList.add(
            "active"
        );
    }
}


/* ============================================================
   HELPERS
   ============================================================ */

function isAncestor(
    ancestor,
    node
) {

    let current =
        node;

    while (current) {

        if (
            current ===
            ancestor
        ) {
            return true;
        }

        current =
            current.parent;
    }

    return false;
}


function escapeHtml(
    value
) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* ============================================================
   RESIZE
   ============================================================ */

let careerResizeTimer = null;

window.addEventListener(
    "resize",
    () => {

        if (
            typeof currentViewMode !==
                "undefined" &&
            currentViewMode !==
                "career"
        ) {
            return;
        }

        clearTimeout(
            careerResizeTimer
        );

        careerResizeTimer =
            setTimeout(
                () => {
                    renderCareerTreeView();
                },
                150
            );
    }
);
