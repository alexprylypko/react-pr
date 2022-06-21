import { decomposeColor } from "@material-ui/core/styles/colorManipulator";

export default function getAnimationData(fillColor: string) {
  const decomposedColor = decomposeColor(fillColor);
  const processedFillColor = [
    decomposedColor.values[0] / 255,
    decomposedColor.values[1] / 255,
    decomposedColor.values[2] / 255,
    decomposedColor.values[3]
  ];

  return {
    v: "5.4.2",
    fr: 29.9700012207031,
    ip: 0,
    op: 70.0000028511585,
    w: 540,
    h: 405,
    nm: "Comp 2",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "core",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [270, 202.5, 0], ix: 2 },
          a: { a: 0, k: [-30.082, -0.082, 0], ix: 1 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                t: 0,
                s: [70, 70, 100],
                e: [70, 70, 100]
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                t: 20,
                s: [70, 70, 100],
                e: [90, 90, 100]
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                t: 30,
                s: [90, 90, 100],
                e: [70, 70, 100]
              },
              { t: 70.0000028511585 }
            ],
            ix: 6
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [200, 200], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: processedFillColor,
                  ix: 4
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-30.082, -0.082], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 2,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 103.000004195276,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "small ripple",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ["0p833_1_0p333_0"],
                t: 17,
                s: [0],
                e: [100]
              },
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ["0p667_1_0p333_0"],
                t: 27,
                s: [100],
                e: [0]
              },
              { t: 60.0000024438501 }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [270, 202.5, 0], ix: 2 },
          a: { a: 0, k: [-30.082, -0.082, 0], ix: 1 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                t: 17,
                s: [50, 50, 100],
                e: [120, 120, 100]
              },
              { t: 60.0000024438501 }
            ],
            ix: 6
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [300, 300], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: processedFillColor,
                  ix: 4
                },
                o: { a: 0, k: 50, ix: 5 },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-30.082, -0.082], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 2,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 103.000004195276,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "large ripple",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                n: ["0p833_1_0p167_0"],
                t: 10,
                s: [0],
                e: [100]
              },
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ["0p667_1_0p333_0"],
                t: 20,
                s: [100],
                e: [0]
              },
              { t: 50.0000020365418 }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [270, 202.5, 0], ix: 2 },
          a: { a: 0, k: [-30.082, -0.082, 0], ix: 1 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                n: ["0p667_1_0p333_0", "0p667_1_0p333_0", "0p667_1_0p333_0"],
                t: 10,
                s: [0, 0, 100],
                e: [130, 130, 100]
              },
              { t: 40.0000016292334 }
            ],
            ix: 6
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [300, 300], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: processedFillColor,
                  ix: 4
                },
                o: { a: 0, k: 50, ix: 5 },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-30.082, -0.082], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 2,
            cix: 2,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 103.000004195276,
        st: 0,
        bm: 0
      }
    ],
    markers: []
  };
}