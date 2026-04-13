export const animals = [
    {
        id: 'monkey',
        name: 'Monkey',
        emoji: '\u{1F412}',
        category: 'animals',
        steps: [
            {
                text: "Draw the monkey's round head!",
                voice: "Let's draw a cheeky monkey! Draw a wide round circle for the head — monkeys have big chubby cheeks!",
                draw(ctx, t) {
                    // Main head — wider than tall, big cheeks
                    ctx.beginPath();
                    ctx.ellipse(250, 155, 75 * t, 68 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Light muzzle area — smaller oval in lower face
                    ctx.beginPath();
                    ctx.ellipse(250, 172, 38 * t, 28 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add big round ears!",
                voice: "Monkeys have big round ears to hear everything in the jungle! Draw two circles on the sides of the head.",
                draw(ctx, t) {
                    // Left ear
                    ctx.beginPath();
                    ctx.arc(173, 155, 26 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left inner ear
                    ctx.beginPath();
                    ctx.arc(173, 155, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right ear
                    ctx.beginPath();
                    ctx.arc(327, 155, 26 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right inner ear
                    ctx.beginPath();
                    ctx.arc(327, 155, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the pear-shaped body!",
                voice: "Draw a pear shape under the head — wide at the bottom and smaller at the top, like a big belly!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 290, 58 * t, 78 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Connect neck
                    ctx.beginPath();
                    ctx.moveTo(222, 218);
                    ctx.lineTo(214, 218 + 16 * t);
                    ctx.moveTo(278, 218);
                    ctx.lineTo(286, 218 + 16 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add arms, legs and a long curling tail!",
                voice: "Now draw short arms on the sides, two stubby legs at the bottom, and a super long curly tail. Monkeys have amazing tails!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(194, 255);
                    ctx.bezierCurveTo(165, 260, 148, 285 * t, 152, 305 * t);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(306, 255);
                    ctx.bezierCurveTo(335, 260, 352, 285 * t, 348, 305 * t);
                    ctx.stroke();
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(222, 365);
                    ctx.lineTo(215, 365 + 22 * t);
                    ctx.lineTo(200, 365 + 28 * t);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(278, 365);
                    ctx.lineTo(285, 365 + 22 * t);
                    ctx.lineTo(300, 365 + 28 * t);
                    ctx.stroke();
                    // Long curling tail from lower right body
                    ctx.beginPath();
                    ctx.moveTo(305, 320);
                    ctx.bezierCurveTo(370, 300 * t, 400, 370 * t, 360, 390 * t);
                    ctx.bezierCurveTo(330, 400 * t, 310, 380 * t, 325, 360 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw eyes, nose and a big smile!",
                voice: "Give the monkey a happy face! Two close-set eyes, a wide round nose, and a big banana smile!",
                draw(ctx, t) {
                    // Eyes — close together
                    ctx.beginPath();
                    ctx.arc(234, 145, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(266, 145, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Wide flat nose on muzzle
                    ctx.beginPath();
                    ctx.ellipse(250, 167, 12 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Nostrils
                    ctx.beginPath();
                    ctx.arc(244, 167, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(256, 167, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Big smile
                    ctx.beginPath();
                    ctx.arc(250, 168, 20, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the face and body brown!", voice: "Pick brown and fill in the monkey's head and big pear body. A warm chocolate brown!", color: '#8B4513' },
            { text: "Paint the muzzle and tummy lighter!", voice: "Use orange to color the round muzzle and the tummy area. It's lighter than the rest!", color: '#FFA502' },
            { text: "Color the inner ears pink!", voice: "Use pink to fill in the smaller circle inside each ear. So cute!", color: '#FF6B81' },
            { text: "Paint the tail brown!", voice: "Color the long curly tail the same brown as the body.", color: '#8B4513' },
            { text: "Add dark eyes and nose details!", voice: "Use dark color to fill in the eyes and the nostrils.", color: '#2F3542' }
        ]
    },
    {
        id: 'elephant',
        name: 'Elephant',
        emoji: '\u{1F418}',
        category: 'animals',
        steps: [
            {
                text: "Draw the massive body!",
                voice: "Elephants are huge! Draw a very large rounded rectangle shape — almost like a big boulder — for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 245, 115 * t, 85 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the big round head!",
                voice: "Draw a large round head connected to the top right of the body. Elephants have big domed heads!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(345, 185, 65 * t, 62 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Neck connection
                    ctx.beginPath();
                    ctx.moveTo(305, 200);
                    ctx.lineTo(300, 218 * t / t || 218);
                    ctx.moveTo(345, 245);
                    ctx.lineTo(335, 245 + 10 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the long curving trunk!",
                voice: "Now the most special part — the trunk! Draw a long S-curved line that goes down then curls up at the tip. Elephants use their trunk for everything!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(385, 195);
                    ctx.bezierCurveTo(
                        420, 210 + 20 * t,
                        415, 270 + 20 * t,
                        390, 295 + 25 * t
                    );
                    ctx.bezierCurveTo(
                        370, 315 + 15 * t,
                        355, 310 * t,
                        358, 290 * t
                    );
                    ctx.stroke();
                    // Trunk tip oval
                    ctx.beginPath();
                    ctx.ellipse(365, 293 * t, 10, 7, 0.5, 0, Math.PI * 2);
                    ctx.stroke();
                    // Tusk
                    ctx.beginPath();
                    ctx.moveTo(370, 215);
                    ctx.bezierCurveTo(395, 220, 405, 230 * t, 400, 240 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add huge fan-shaped ears!",
                voice: "Elephant ears are ENORMOUS — like big fans! Draw a huge rounded shape on the side of the head. African elephants have the biggest ears!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(305, 145);
                    ctx.bezierCurveTo(
                        260, 115 * t,
                        225, 130 * t,
                        240, 185 * t
                    );
                    ctx.bezierCurveTo(
                        245, 215 * t,
                        270, 230 * t,
                        300, 220 * t
                    );
                    ctx.stroke();
                    // Inner ear line
                    ctx.beginPath();
                    ctx.moveTo(305, 153);
                    ctx.bezierCurveTo(
                        270, 130 * t,
                        252, 145 * t,
                        262, 188 * t
                    );
                    ctx.stroke();
                }
            },
            {
                text: "Draw four thick legs and a small tail!",
                voice: "Elephants have big column legs — thick and sturdy like tree trunks! Draw four rectangles and a little rope tail at the back.",
                draw(ctx, t) {
                    // Front left leg
                    ctx.beginPath();
                    ctx.moveTo(165, 318);
                    ctx.lineTo(162, 318 + 55 * t);
                    ctx.lineTo(185, 318 + 55 * t);
                    ctx.lineTo(188, 318);
                    ctx.stroke();
                    // Front right leg
                    ctx.beginPath();
                    ctx.moveTo(205, 320);
                    ctx.lineTo(202, 320 + 55 * t);
                    ctx.lineTo(228, 320 + 55 * t);
                    ctx.lineTo(230, 320);
                    ctx.stroke();
                    // Back left leg
                    ctx.beginPath();
                    ctx.moveTo(255, 320);
                    ctx.lineTo(252, 320 + 55 * t);
                    ctx.lineTo(278, 320 + 55 * t);
                    ctx.lineTo(280, 320);
                    ctx.stroke();
                    // Back right leg
                    ctx.beginPath();
                    ctx.moveTo(295, 318);
                    ctx.lineTo(292, 318 + 55 * t);
                    ctx.lineTo(315, 318 + 55 * t);
                    ctx.lineTo(316, 318);
                    ctx.stroke();
                    // Tiny tail with tuft
                    ctx.beginPath();
                    ctx.moveTo(118, 235);
                    ctx.bezierCurveTo(100, 250 * t, 95, 265 * t, 100, 275 * t);
                    ctx.stroke();
                    // Small eye
                    ctx.beginPath();
                    ctx.arc(358, 168, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        ],
        paintSteps: [
            { text: "Color the whole body grey!", voice: "Pick light blue and fill in the elephant's huge body. Elephants are grey!", color: '#70A1FF' },
            { text: "Paint the head and trunk grey!", voice: "Use the same light blue on the big round head and long trunk.", color: '#70A1FF' },
            { text: "Color the ear inside pink!", voice: "Use pink to fill in the inner ear shape. So pretty!", color: '#FF6B81' },
            { text: "Paint the legs grey!", voice: "Color all four sturdy legs the same grey.", color: '#70A1FF' },
            { text: "Add white tusks and dark eye!", voice: "Use white for the tusk and dark for the small eye.", color: '#FFFFFF' }
        ]
    },
    {
        id: 'lion',
        name: 'Lion',
        emoji: '\u{1F981}',
        category: 'animals',
        steps: [
            {
                text: "Draw the fluffy mane!",
                voice: "The lion's mane is his crown! Draw lots of bumpy lumps all the way around in a big circle — like a spiky wreath.",
                draw(ctx, t) {
                    ctx.beginPath();
                    const cx = 250, cy = 165, r = 95;
                    const bumps = 14;
                    for (let i = 0; i <= bumps; i++) {
                        const a = (i / bumps) * Math.PI * 2 * t - Math.PI / 2;
                        const ap = ((i - 0.5) / bumps) * Math.PI * 2 * t - Math.PI / 2;
                        const rx = cx + Math.cos(ap) * (r - 18);
                        const ry = cy + Math.sin(ap) * (r - 18);
                        const x = cx + Math.cos(a) * r;
                        const y = cy + Math.sin(a) * r;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.quadraticCurveTo(rx, ry, x, y);
                    }
                    ctx.stroke();
                }
            },
            {
                text: "Draw the round face!",
                voice: "Inside the mane, draw a nice round circle for the face. Lions have a proud, round face!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 165, 65 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // small round ears poking above mane
                    ctx.beginPath();
                    ctx.arc(195, 112, 16 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(305, 112, 16 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the proud body and legs!",
                voice: "Lions have a strong muscular chest! Draw a wide oval body, then four sturdy legs at the bottom.",
                draw(ctx, t) {
                    // Body
                    ctx.beginPath();
                    ctx.ellipse(250, 307, 75 * t, 65 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Front left leg
                    ctx.beginPath();
                    ctx.moveTo(195, 355);
                    ctx.lineTo(190, 355 + 30 * t);
                    ctx.lineTo(205, 355 + 30 * t);
                    ctx.stroke();
                    // Front right leg
                    ctx.beginPath();
                    ctx.moveTo(230, 358);
                    ctx.lineTo(225, 358 + 28 * t);
                    ctx.lineTo(240, 358 + 28 * t);
                    ctx.stroke();
                    // Back left leg
                    ctx.beginPath();
                    ctx.moveTo(265, 358);
                    ctx.lineTo(260, 358 + 28 * t);
                    ctx.lineTo(275, 358 + 28 * t);
                    ctx.stroke();
                    // Back right leg
                    ctx.beginPath();
                    ctx.moveTo(300, 355);
                    ctx.lineTo(295, 355 + 30 * t);
                    ctx.lineTo(310, 355 + 30 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add the tail with a tuft!",
                voice: "Lions have a cool tail with a fluffy pom-pom at the end! Draw a long curving tail and add a bunch of short lines for the tuft.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(323, 290);
                    ctx.bezierCurveTo(370, 280 * t, 390, 320 * t, 380, 355 * t);
                    ctx.stroke();
                    // Tuft — short radiating lines
                    const tx = 378, ty = 358;
                    for (let i = 0; i < 8; i++) {
                        const a = (i / 8) * Math.PI + Math.PI * 0.3;
                        ctx.beginPath();
                        ctx.moveTo(tx, ty);
                        ctx.lineTo(tx + Math.cos(a) * 16 * t, ty + Math.sin(a) * 16 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add the lion's face details!",
                voice: "Now give the lion a majestic face! Draw almond eyes, a triangular nose, whisker dots, and a proud smile.",
                draw(ctx, t) {
                    // Eyes — almond shaped
                    ctx.beginPath();
                    ctx.ellipse(228, 155, 10 * t, 7 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(272, 155, 10 * t, 7 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Triangular nose
                    ctx.beginPath();
                    ctx.moveTo(250, 168);
                    ctx.lineTo(243, 168 + 10 * t);
                    ctx.lineTo(257, 168 + 10 * t);
                    ctx.closePath();
                    ctx.fill();
                    // Mouth lines
                    ctx.beginPath();
                    ctx.moveTo(250, 178);
                    ctx.lineTo(238, 178 + 10 * t);
                    ctx.moveTo(250, 178);
                    ctx.lineTo(262, 178 + 10 * t);
                    ctx.stroke();
                    // Whisker dots
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.arc(210 + i * 14, 172, 2.5 * t, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.arc(290 - i * 14, 172, 2.5 * t, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the mane dark orange!", voice: "Pick orange and fill in all the bumpy mane around the face. A big glorious orange crown!", color: '#FFA502' },
            { text: "Paint the face golden yellow!", voice: "Use yellow to color the lion's round face inside the mane.", color: '#ECCC68' },
            { text: "Color the body and legs yellow!", voice: "Paint the body and all four legs the same golden yellow.", color: '#ECCC68' },
            { text: "Paint the nose and eyes dark!", voice: "Use dark color to fill in the triangular nose and almond eyes.", color: '#2F3542' },
            { text: "Color the tail and tuft!", voice: "Use yellow for the tail and orange for the fluffy tuft at the end!", color: '#FFA502' }
        ]
    },
    {
        id: 'tiger',
        name: 'Tiger',
        emoji: '\u{1F42F}',
        category: 'animals',
        steps: [
            {
                text: "Draw the tiger's round head!",
                voice: "Let's draw a fierce tiger! Draw a big round circle for the head — rounder than a lion's!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 155, 78 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // White chin / muzzle patch — flat oval at bottom of face
                    ctx.beginPath();
                    ctx.ellipse(250, 188, 35 * t, 24 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Rounded triangular ears
                    ctx.beginPath();
                    ctx.moveTo(187, 102);
                    ctx.lineTo(175, 102 - 38 * t);
                    ctx.lineTo(210, 93);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(313, 102);
                    ctx.lineTo(325, 102 - 38 * t);
                    ctx.lineTo(290, 93);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the sleek body!",
                voice: "Tigers are sleek and muscular! Draw a long oval body under the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 300, 72 * t, 82 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Four sturdy legs
                    ctx.beginPath();
                    ctx.moveTo(192, 365);
                    ctx.lineTo(187, 365 + 25 * t);
                    ctx.lineTo(203, 365 + 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(228, 370);
                    ctx.lineTo(223, 370 + 22 * t);
                    ctx.lineTo(240, 370 + 22 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(262, 370);
                    ctx.lineTo(257, 370 + 22 * t);
                    ctx.lineTo(274, 370 + 22 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(298, 365);
                    ctx.lineTo(293, 365 + 25 * t);
                    ctx.lineTo(310, 365 + 25 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the long striped tail!",
                voice: "Tiger tails are long and striped! Draw a long curved tail going up from the back.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(320, 285);
                    ctx.bezierCurveTo(370, 270 * t, 395, 310 * t, 388, 350 * t);
                    ctx.stroke();
                    // Tail stripes — short bands across tail
                    for (let i = 0; i < 4; i++) {
                        const frac = (i + 1) / 6;
                        const tx = 320 + frac * 65;
                        const ty = 285 + frac * 60 * t;
                        ctx.beginPath();
                        ctx.moveTo(tx - 6, ty - 8);
                        ctx.lineTo(tx + 6, ty + 8);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add V-shaped forehead stripes!",
                voice: "Tigers have very special stripes on their forehead that make a V shape. Draw them now — and add cheek stripes too!",
                draw(ctx, t) {
                    // Central forehead V-stripe
                    ctx.beginPath();
                    ctx.moveTo(250, 107);
                    ctx.lineTo(238, 107 + 22 * t);
                    ctx.moveTo(250, 107);
                    ctx.lineTo(262, 107 + 22 * t);
                    ctx.stroke();
                    // Two side forehead stripes
                    ctx.beginPath();
                    ctx.moveTo(218, 110);
                    ctx.lineTo(213, 110 + 20 * t);
                    ctx.moveTo(282, 110);
                    ctx.lineTo(287, 110 + 20 * t);
                    ctx.stroke();
                    // Cheek stripes — left side
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.moveTo(178, 148 + i * 18);
                        ctx.lineTo(178 + 22 * t, 144 + i * 18);
                        ctx.stroke();
                    }
                    // Cheek stripes — right side
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.moveTo(322, 148 + i * 18);
                        ctx.lineTo(322 - 22 * t, 144 + i * 18);
                        ctx.stroke();
                    }
                    // Body stripes
                    for (let i = 0; i < 5; i++) {
                        const sx = 178 + i * 28;
                        ctx.beginPath();
                        ctx.moveTo(sx, 248);
                        ctx.lineTo(sx + 8 * t, 248 + 60 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add the tiger's fierce face!",
                voice: "Now give the tiger a fierce face! Big round eyes, a wide nose, and whisker dots on the white chin!",
                draw(ctx, t) {
                    // Eyes
                    ctx.beginPath();
                    ctx.arc(224, 148, 9 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(276, 148, 9 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Wide flat nose
                    ctx.beginPath();
                    ctx.ellipse(250, 175, 10 * t, 7 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Mouth
                    ctx.beginPath();
                    ctx.moveTo(250, 182);
                    ctx.lineTo(240, 182 + 10 * t);
                    ctx.moveTo(250, 182);
                    ctx.lineTo(260, 182 + 10 * t);
                    ctx.stroke();
                    // Whisker dots on chin
                    for (let i = 0; i < 4; i++) {
                        ctx.beginPath();
                        ctx.arc(225 + i * 9, 192, 2.5 * t, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the head and body orange!", voice: "Pick orange and fill in the tiger's round head and long body. A bright fiery orange!", color: '#FFA502' },
            { text: "Paint the chin and ears white!", voice: "Use white to fill in the muzzle patch and the inner ear. Tigers have white chins!", color: '#FFFFFF' },
            { text: "Color all the stripes dark!", voice: "Use dark color for all the stripes — the forehead V, the cheek lines, and the body stripes. Tigers are all about stripes!", color: '#2F3542' },
            { text: "Paint the eyes and nose dark!", voice: "Color the round eyes and wide nose dark.", color: '#2F3542' },
            { text: "Color the tail orange with dark stripes!", voice: "Use orange on the tail, and dark for the stripe bands.", color: '#FFA502' }
        ]
    },
    {
        id: 'zebra',
        name: 'Zebra',
        emoji: '\u{1F993}',
        category: 'animals',
        steps: [
            {
                text: "Draw the long horse-like body!",
                voice: "Zebras look like horses in pajamas! Draw a long rounded rectangle body — longer than it is tall.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(220, 255, 110 * t, 65 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the long neck and small head!",
                voice: "Zebras have a longer neck than most animals. Draw a tall neck going up and then a small oval head with a long snout!",
                draw(ctx, t) {
                    // Neck — two parallel lines
                    ctx.beginPath();
                    ctx.moveTo(300, 205);
                    ctx.lineTo(318, 205 - 70 * t);
                    ctx.moveTo(325, 210);
                    ctx.lineTo(340, 210 - 65 * t);
                    ctx.stroke();
                    // Head — elongated oval tilted forward
                    ctx.beginPath();
                    ctx.ellipse(348, 127, 40 * t, 26 * t, 0.35, 0, Math.PI * 2);
                    ctx.stroke();
                    // Snout extension
                    ctx.beginPath();
                    ctx.ellipse(376, 132, 18 * t, 14 * t, 0.4, 0, Math.PI * 2);
                    ctx.stroke();
                    // Pointy upright ear
                    ctx.beginPath();
                    ctx.moveTo(330, 108);
                    ctx.lineTo(326, 108 - 28 * t);
                    ctx.lineTo(340, 105);
                    ctx.closePath();
                    ctx.stroke();
                    // Mane ridge along neck
                    ctx.beginPath();
                    ctx.moveTo(335, 143);
                    ctx.lineTo(330, 143 - 8 * t);
                    ctx.moveTo(325, 157);
                    ctx.lineTo(320, 157 - 9 * t);
                    ctx.moveTo(315, 171);
                    ctx.lineTo(310, 171 - 9 * t);
                    ctx.moveTo(307, 186);
                    ctx.lineTo(302, 186 - 9 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw four legs with hooves!",
                voice: "Zebras have four strong legs! Draw tall rectangles for the legs and little flat rectangles at the bottom for the hooves.",
                draw(ctx, t) {
                    // Front pair
                    ctx.beginPath();
                    ctx.moveTo(145, 308);
                    ctx.lineTo(142, 308 + 65 * t);
                    ctx.lineTo(158, 308 + 65 * t);
                    ctx.lineTo(158, 308);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(175, 310);
                    ctx.lineTo(172, 310 + 63 * t);
                    ctx.lineTo(188, 310 + 63 * t);
                    ctx.lineTo(188, 310);
                    ctx.stroke();
                    // Back pair
                    ctx.beginPath();
                    ctx.moveTo(248, 308);
                    ctx.lineTo(245, 308 + 65 * t);
                    ctx.lineTo(260, 308 + 65 * t);
                    ctx.lineTo(262, 308);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(278, 310);
                    ctx.lineTo(275, 310 + 63 * t);
                    ctx.lineTo(290, 310 + 63 * t);
                    ctx.lineTo(292, 310);
                    ctx.stroke();
                    // Short tail
                    ctx.beginPath();
                    ctx.moveTo(112, 248);
                    ctx.lineTo(92, 250 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the parallel body stripes!",
                voice: "Now the fun part — zebra stripes! Draw many parallel lines across the body, neck, and legs. Each stripe goes from top to bottom!",
                draw(ctx, t) {
                    // Body stripes — vertical bands
                    for (let i = 0; i < 8; i++) {
                        const sx = 120 + i * 26;
                        ctx.beginPath();
                        ctx.moveTo(sx, 200);
                        ctx.lineTo(sx + 6 * t, 200 + 100 * t);
                        ctx.stroke();
                    }
                    // Neck stripes
                    ctx.beginPath();
                    ctx.moveTo(305, 148);
                    ctx.lineTo(318, 148 - 45 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(314, 155);
                    ctx.lineTo(328, 155 - 50 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(322, 165);
                    ctx.lineTo(338, 165 - 55 * t);
                    ctx.stroke();
                    // Leg stripes
                    for (let leg of [[148, 308], [178, 310], [250, 308], [280, 310]]) {
                        for (let s = 0; s < 3; s++) {
                            ctx.beginPath();
                            ctx.moveTo(leg[0], leg[1] + s * 18 * t);
                            ctx.lineTo(leg[0] + 14, leg[1] + s * 18 * t);
                            ctx.stroke();
                        }
                    }
                }
            },
            {
                text: "Add the face details!",
                voice: "Give the zebra a friendly face! Add a round eye, a nostril on the snout, and stripe patterns on the head.",
                draw(ctx, t) {
                    // Eye
                    ctx.beginPath();
                    ctx.arc(340, 120, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Nostril on snout
                    ctx.beginPath();
                    ctx.arc(382, 138, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Head stripes
                    ctx.beginPath();
                    ctx.moveTo(325, 107);
                    ctx.lineTo(356, 107 + 10 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(335, 115);
                    ctx.lineTo(362, 115 + 12 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the whole body white!", voice: "Pick white and fill in the zebra's whole body, neck and head. Zebras are white underneath their stripes!", color: '#FFFFFF' },
            { text: "Paint all the stripes black!", voice: "Use dark color to carefully fill in every single stripe. The more stripes the better!", color: '#2F3542' },
            { text: "Color the legs white with dark stripes!", voice: "Fill the legs white first, then add the dark stripe bands.", color: '#FFFFFF' },
            { text: "Paint the hooves dark!", voice: "Use dark color on the little hooves at the bottom of each leg.", color: '#2F3542' },
            { text: "Color the mane dark!", voice: "Paint the little mane spikes along the neck dark. So stylish!", color: '#2F3542' }
        ]
    },
    {
        id: 'cat',
        name: 'Kitty Cat',
        emoji: '\u{1F431}',
        category: 'animals',
        steps: [
            {
                text: "Draw the round head with pointy ears!",
                voice: "Let's draw a cute kitty! Draw a round circle for the head and two sharp triangles on top for the ears. Cats have the pointiest ears!",
                draw(ctx, t) {
                    // Head
                    ctx.beginPath();
                    ctx.arc(250, 160, 78 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left pointy ear
                    ctx.beginPath();
                    ctx.moveTo(185, 120);
                    ctx.lineTo(175, 120 - 50 * t);
                    ctx.lineTo(215, 107);
                    ctx.closePath();
                    ctx.stroke();
                    // Left inner ear
                    ctx.beginPath();
                    ctx.moveTo(190, 115);
                    ctx.lineTo(182, 115 - 32 * t);
                    ctx.lineTo(212, 112);
                    ctx.closePath();
                    ctx.stroke();
                    // Right pointy ear
                    ctx.beginPath();
                    ctx.moveTo(315, 120);
                    ctx.lineTo(325, 120 - 50 * t);
                    ctx.lineTo(285, 107);
                    ctx.closePath();
                    ctx.stroke();
                    // Right inner ear
                    ctx.beginPath();
                    ctx.moveTo(310, 115);
                    ctx.lineTo(318, 115 - 32 * t);
                    ctx.lineTo(288, 112);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the sitting body with paws!",
                voice: "This kitty is sitting nicely! Draw a rounded body shape and two little paws tucked in at the front.",
                draw(ctx, t) {
                    // Rounded body
                    ctx.beginPath();
                    ctx.ellipse(250, 295, 60 * t, 78 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left paw — oval at bottom left
                    ctx.beginPath();
                    ctx.ellipse(207, 348, 22 * t, 14 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right paw
                    ctx.beginPath();
                    ctx.ellipse(293, 348, 22 * t, 14 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Toe lines on paws
                    ctx.beginPath();
                    ctx.moveTo(200, 348);
                    ctx.lineTo(200, 348 + 10 * t);
                    ctx.moveTo(207, 348);
                    ctx.lineTo(207, 348 + 12 * t);
                    ctx.moveTo(214, 348);
                    ctx.lineTo(214, 348 + 10 * t);
                    ctx.moveTo(286, 348);
                    ctx.lineTo(286, 348 + 10 * t);
                    ctx.moveTo(293, 348);
                    ctx.lineTo(293, 348 + 12 * t);
                    ctx.moveTo(300, 348);
                    ctx.lineTo(300, 348 + 10 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the long curling tail!",
                voice: "A cat's tail is elegant and always curling! Draw a long tail that wraps around the body and curls up at the tip.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(305, 335);
                    ctx.bezierCurveTo(360, 330 * t, 375, 380 * t, 340, 395 * t);
                    ctx.bezierCurveTo(305, 400 * t, 280, 375 * t, 285, 360 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the almond eyes and small nose!",
                voice: "Cats have beautiful almond-shaped eyes and a little triangle nose. Let's add them to make the kitty look adorable!",
                draw(ctx, t) {
                    // Left eye — almond
                    ctx.beginPath();
                    ctx.ellipse(222, 152, 14 * t, 10 * t, -0.2, 0, Math.PI * 2);
                    ctx.fill();
                    // Right eye — almond
                    ctx.beginPath();
                    ctx.ellipse(278, 152, 14 * t, 10 * t, 0.2, 0, Math.PI * 2);
                    ctx.fill();
                    // Tiny triangle nose
                    ctx.beginPath();
                    ctx.moveTo(250, 174);
                    ctx.lineTo(244, 174 + 10 * t);
                    ctx.lineTo(256, 174 + 10 * t);
                    ctx.closePath();
                    ctx.fill();
                    // Mouth lines
                    ctx.beginPath();
                    ctx.moveTo(250, 184);
                    ctx.lineTo(240, 184 + 8 * t);
                    ctx.moveTo(250, 184);
                    ctx.lineTo(260, 184 + 8 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add long whiskers!",
                voice: "Cats are famous for their whiskers! Draw four long lines on each side — they help the cat feel where it's going!",
                draw(ctx, t) {
                    // Left whiskers
                    ctx.beginPath();
                    ctx.moveTo(238, 175);
                    ctx.lineTo(238 - 55 * t, 168);
                    ctx.moveTo(236, 182);
                    ctx.lineTo(236 - 55 * t, 182);
                    ctx.moveTo(238, 189);
                    ctx.lineTo(238 - 55 * t, 196);
                    ctx.stroke();
                    // Right whiskers
                    ctx.beginPath();
                    ctx.moveTo(262, 175);
                    ctx.lineTo(262 + 55 * t, 168);
                    ctx.moveTo(264, 182);
                    ctx.lineTo(264 + 55 * t, 182);
                    ctx.moveTo(262, 189);
                    ctx.lineTo(262 + 55 * t, 196);
                    ctx.stroke();
                    // Eyebrow whiskers
                    ctx.beginPath();
                    ctx.moveTo(215, 140);
                    ctx.lineTo(210, 140 - 12 * t);
                    ctx.moveTo(285, 140);
                    ctx.lineTo(290, 140 - 12 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the head and body orange!", voice: "Pick orange and fill in the kitty's whole head and sitting body. A beautiful tabby orange!", color: '#FFA502' },
            { text: "Paint the inner ears pink!", voice: "Use pink to fill in the inside triangle of each pointy ear.", color: '#FF6B81' },
            { text: "Color the paws lighter!", voice: "Use yellow to color the little front paws a slightly lighter shade.", color: '#ECCC68' },
            { text: "Paint the nose and eyes!", voice: "Use pink for the tiny nose and dark for the beautiful almond eyes.", color: '#FF6B81' },
            { text: "Color the tail and add stripes!", voice: "Use orange on the tail, and dark for some stripe lines along the back.", color: '#8B4513' }
        ]
    },
    {
        id: 'dog',
        name: 'Puppy Dog',
        emoji: '\u{1F436}',
        category: 'animals',
        steps: [
            {
                text: "Draw the round head with a snout!",
                voice: "Let's draw the cutest puppy ever! Draw a round circle head and then a forward-jutting muzzle shape — like a little blob sticking out in front!",
                draw(ctx, t) {
                    // Main head
                    ctx.beginPath();
                    ctx.arc(250, 158, 75 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Protruding muzzle / snout
                    ctx.beginPath();
                    ctx.ellipse(278, 182, 32 * t, 24 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add big floppy ears!",
                voice: "Puppies have the best floppy ears that hang down on the sides! Draw two big droopy ovals. Floppy floppy!",
                draw(ctx, t) {
                    // Left floppy ear — large oval hanging down
                    ctx.beginPath();
                    ctx.ellipse(178, 185, 24 * t, 50 * t, -0.25, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right floppy ear
                    ctx.beginPath();
                    ctx.ellipse(322, 185, 24 * t, 50 * t, 0.25, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the body and four legs!",
                voice: "Draw a chubby oval body and four sturdy little puppy legs. Puppies are always ready to run and play!",
                draw(ctx, t) {
                    // Body
                    ctx.beginPath();
                    ctx.ellipse(250, 300, 70 * t, 78 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Front left leg
                    ctx.beginPath();
                    ctx.moveTo(196, 358);
                    ctx.lineTo(192, 358 + 30 * t);
                    ctx.lineTo(210, 358 + 30 * t);
                    ctx.lineTo(210, 358);
                    ctx.stroke();
                    // Front right leg
                    ctx.beginPath();
                    ctx.moveTo(228, 362);
                    ctx.lineTo(224, 362 + 28 * t);
                    ctx.lineTo(242, 362 + 28 * t);
                    ctx.lineTo(242, 362);
                    ctx.stroke();
                    // Back left leg
                    ctx.beginPath();
                    ctx.moveTo(260, 362);
                    ctx.lineTo(256, 362 + 28 * t);
                    ctx.lineTo(274, 362 + 28 * t);
                    ctx.lineTo(274, 362);
                    ctx.stroke();
                    // Back right leg
                    ctx.beginPath();
                    ctx.moveTo(292, 358);
                    ctx.lineTo(288, 358 + 30 * t);
                    ctx.lineTo(306, 358 + 30 * t);
                    ctx.lineTo(306, 358);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the wagging tail!",
                voice: "This puppy is SO happy! Draw a curved tail going up and curling — it's wagging with excitement!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(318, 270);
                    ctx.bezierCurveTo(358, 255 * t, 382, 225 * t, 368, 208 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add the happy face with tongue out!",
                voice: "Give the puppy a happy face — big round eyes, a dark nose on the snout, and a pink tongue hanging out. Panting puppy!",
                draw(ctx, t) {
                    // Eyes
                    ctx.beginPath();
                    ctx.arc(224, 148, 9 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(265, 148, 9 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Nose on snout
                    ctx.beginPath();
                    ctx.ellipse(280, 175, 10 * t, 8 * t, 0.3, 0, Math.PI * 2);
                    ctx.fill();
                    // Mouth line
                    ctx.beginPath();
                    ctx.moveTo(268, 188);
                    ctx.arc(268, 188, 12, 0, (0.8 * t) * Math.PI);
                    ctx.stroke();
                    // Tongue
                    ctx.beginPath();
                    ctx.ellipse(272, 200, 9 * t, 12 * t, 0.1, 0, Math.PI * 2);
                    ctx.stroke();
                    // Tongue split
                    ctx.beginPath();
                    ctx.moveTo(272, 194);
                    ctx.lineTo(272, 194 + 14 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the head and body golden brown!", voice: "Pick brown and fill in the puppy's round head and chubby body. A warm golden brown!", color: '#8B4513' },
            { text: "Paint the floppy ears darker!", voice: "Use dark color to fill in both big floppy ears — a bit darker than the body.", color: '#2F3542' },
            { text: "Color the snout and paws lighter!", voice: "Use yellow to paint the muzzle area and the paws a lighter color.", color: '#ECCC68' },
            { text: "Paint the nose dark and tongue pink!", voice: "Use dark for the wet nose and pink for the happy panting tongue!", color: '#2F3542' },
            { text: "Color the tail and add spots!", voice: "Use brown for the wagging tail, and add a spot or patch in dark on the back.", color: '#8B4513' }
        ]
    },
    {
        id: 'fish',
        name: 'Fish',
        emoji: '\u{1F420}',
        category: 'animals',
        steps: [
            {
                text: "Draw the streamlined fish body!",
                voice: "Let's draw a beautiful fish! Draw a pointed oval — round in the middle but coming to a point where the mouth is. Fish are super streamlined for swimming!",
                draw(ctx, t) {
                    ctx.beginPath();
                    // Use bezier for a more pointed fish shape
                    ctx.moveTo(130, 200);
                    ctx.bezierCurveTo(140, 130 * t, 260, 130 * t, 340, 200);
                    ctx.bezierCurveTo(260, 270 * t, 140, 270 * t, 130, 200);
                    ctx.stroke();
                }
            },
            {
                text: "Add the forked tail fin!",
                voice: "Fish tails are forked like a V! Draw two triangles spreading out from the back of the body. This is called the caudal fin!",
                draw(ctx, t) {
                    // Forked tail — two triangular lobes
                    ctx.beginPath();
                    ctx.moveTo(133, 200);
                    ctx.lineTo(133 - 65 * t, 155);
                    ctx.lineTo(133 - 40 * t, 200);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(133, 200);
                    ctx.lineTo(133 - 65 * t, 245);
                    ctx.lineTo(133 - 40 * t, 200);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the dorsal and pectoral fins!",
                voice: "Fish have fins on top and on their sides! Draw a curved fin on top — that's the dorsal fin — and a smaller one on the side.",
                draw(ctx, t) {
                    // Dorsal fin on top
                    ctx.beginPath();
                    ctx.moveTo(200, 148);
                    ctx.bezierCurveTo(215, 100 * t, 265, 100 * t, 275, 150);
                    ctx.lineTo(200, 148);
                    ctx.stroke();
                    // Pectoral fin on side
                    ctx.beginPath();
                    ctx.moveTo(240, 200);
                    ctx.bezierCurveTo(250, 220 * t, 290, 230 * t, 295, 215);
                    ctx.bezierCurveTo(290, 205 * t, 255, 200 * t, 240, 200);
                    ctx.stroke();
                    // Anal fin at bottom
                    ctx.beginPath();
                    ctx.moveTo(200, 252);
                    ctx.bezierCurveTo(215, 275 * t, 245, 275 * t, 248, 255);
                    ctx.lineTo(200, 252);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the eye and mouth!",
                voice: "Add a big round eye near the front — fish have big eyes to see underwater! And draw a little curved mouth line.",
                draw(ctx, t) {
                    // Large eye with pupil
                    ctx.beginPath();
                    ctx.arc(298, 190, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(295, 189, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Mouth — small curve at the point
                    ctx.beginPath();
                    ctx.moveTo(336, 196);
                    ctx.quadraticCurveTo(344, 203 * t, 336, 205 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add scale patterns!",
                voice: "Fish are covered in shiny scales — they look like overlapping half-circles. Draw rows of curved arcs across the body!",
                draw(ctx, t) {
                    // Rows of scale arcs
                    for (let row = 0; row < 3; row++) {
                        for (let col = 0; col < 4; col++) {
                            const sx = 175 + col * 35;
                            const sy = 165 + row * 28;
                            ctx.beginPath();
                            ctx.arc(sx, sy, 18 * t, Math.PI, 0);
                            ctx.stroke();
                        }
                    }
                    // Lateral line — stripe along the middle
                    ctx.beginPath();
                    ctx.moveTo(140, 200);
                    ctx.lineTo(140 + 180 * t, 200);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body bright blue!", voice: "Pick blue and fill in the whole fish body. A beautiful ocean blue!", color: '#1E90FF' },
            { text: "Paint the tail fin orange!", voice: "Use orange for both parts of the forked tail. It pops against the blue!", color: '#FFA502' },
            { text: "Color the top fin light blue!", voice: "Use light blue to fill in the dorsal fin on top.", color: '#70A1FF' },
            { text: "Paint the scales with a pattern!", voice: "Use light blue to carefully color the scale arcs. So shiny!", color: '#70A1FF' },
            { text: "Add a dark eye with white shine!", voice: "Use dark color to fill in the pupil, then add a tiny white dot for the sparkle in the eye!", color: '#2F3542' }
        ]
    },
    {
        id: 'snake',
        name: 'Snake',
        emoji: '\u{1F40D}',
        category: 'animals',
        steps: [
            {
                text: "Draw the triangular head!",
                voice: "Let's draw a sneaky snake! Start with a wide triangular head — snakes have wide heads that are much bigger than their skinny neck. Ssssss!",
                draw(ctx, t) {
                    // Wide diamond/triangle head
                    ctx.beginPath();
                    ctx.moveTo(380, 80);
                    ctx.lineTo(380 + 28 * t, 95);
                    ctx.lineTo(380 + 22 * t, 115);
                    ctx.lineTo(380 - 5 * t, 118);
                    ctx.lineTo(380 - 25 * t, 105);
                    ctx.lineTo(380 - 18 * t, 85);
                    ctx.closePath();
                    ctx.stroke();
                    // Neck narrowing
                    ctx.beginPath();
                    ctx.moveTo(357, 110);
                    ctx.lineTo(350, 120 * t / t || 120);
                    ctx.moveTo(363, 117);
                    ctx.lineTo(356, 128 * t / t || 128);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the S-curve body getting thinner!",
                voice: "Snakes have long S-shaped bodies! Draw a big S-curve going from the head all the way down to a thin pointy tail. The tail gets thinner and thinner!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(356, 115);
                    ctx.bezierCurveTo(
                        310, 110,
                        280, 190 * t,
                        300, 230 * t
                    );
                    ctx.bezierCurveTo(
                        320, 270 * t,
                        200, 290 * t,
                        160, 310 * t
                    );
                    ctx.bezierCurveTo(
                        120, 330 * t,
                        130, 370 * t,
                        100, 380 * t
                    );
                    ctx.stroke();
                    // Outer edge of body to show width
                    ctx.beginPath();
                    ctx.moveTo(355, 125);
                    ctx.bezierCurveTo(
                        330, 130,
                        300, 210 * t,
                        318, 248 * t
                    );
                    ctx.bezierCurveTo(
                        336, 285 * t,
                        218, 304 * t,
                        178, 322 * t
                    );
                    ctx.bezierCurveTo(
                        138, 342 * t,
                        145, 375 * t,
                        100, 380 * t
                    );
                    ctx.stroke();
                }
            },
            {
                text: "Draw diamond pattern along the body!",
                voice: "Many snakes have a beautiful diamond pattern on their back — it's called a zigzag! Draw zigzag lines along the body.",
                draw(ctx, t) {
                    // Zigzag along the top of body
                    const points = [
                        [345, 120], [330, 135], [315, 148], [305, 162],
                        [300, 178], [298, 195], [300, 212], [308, 228],
                        [315, 244], [310, 260], [295, 272], [275, 280],
                        [250, 288], [225, 295], [200, 300]
                    ];
                    for (let i = 0; i < Math.floor(points.length * t); i++) {
                        if (i === 0) continue;
                        ctx.beginPath();
                        if (i % 2 === 0) {
                            ctx.moveTo(points[i - 1][0] - 8, points[i - 1][1]);
                            ctx.lineTo(points[i][0], points[i][1]);
                        } else {
                            ctx.moveTo(points[i - 1][0] + 8, points[i - 1][1]);
                            ctx.lineTo(points[i][0], points[i][1]);
                        }
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add the eye and forked tongue!",
                voice: "Give the snake a beady eye and a forked tongue sticking way out! Snakes flick their tongue to smell the air. Ssssss!",
                draw(ctx, t) {
                    // Eye
                    ctx.beginPath();
                    ctx.arc(388, 90, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Slit pupil
                    ctx.beginPath();
                    ctx.ellipse(388, 90, 2 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Forked tongue
                    ctx.beginPath();
                    ctx.moveTo(408, 99);
                    ctx.lineTo(408 + 22 * t, 95);
                    ctx.moveTo(408, 99);
                    ctx.lineTo(408 + 22 * t, 103);
                    ctx.stroke();
                    // Tongue base
                    ctx.beginPath();
                    ctx.moveTo(403, 99);
                    ctx.lineTo(408, 99);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body green!", voice: "Pick green and fill in the whole long snake body. A beautiful jungle green!", color: '#2ED573' },
            { text: "Paint the diamond pattern dark!", voice: "Use dark color to fill in the zigzag diamond shapes along the back. So fierce!", color: '#2F3542' },
            { text: "Color the belly lighter!", voice: "Use light green to paint the underside of the snake lighter.", color: '#7BED9F' },
            { text: "Add red tongue and dark eye!", voice: "Use red for the forked tongue and dark for the beady slit eye. Ssssss!", color: '#FF4757' }
        ]
    },
    {
        id: 'penguin',
        name: 'Penguin',
        emoji: '\u{1F427}',
        category: 'animals',
        steps: [
            {
                text: "Draw the bowling-pin body!",
                voice: "Let's draw a waddling penguin! Draw a shape like a bowling pin — narrow at the top and wide at the bottom. Penguins are round and chubby!",
                draw(ctx, t) {
                    ctx.beginPath();
                    // Bowling pin / egg shape
                    ctx.moveTo(250, 80);
                    ctx.bezierCurveTo(295, 80, 310, 120 * t, 310, 170 * t);
                    ctx.bezierCurveTo(310, 250 * t, 295, 330 * t, 250, 340 * t);
                    ctx.bezierCurveTo(205, 330 * t, 190, 250 * t, 190, 170 * t);
                    ctx.bezierCurveTo(190, 120 * t, 205, 80, 250, 80);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the white tummy patch!",
                voice: "Penguins are black on the outside but have a big white tummy! Draw an oval patch in the middle of the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 215, 42 * t, 90 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the flippers and feet!",
                voice: "Penguins have little flippers instead of arms — great for swimming! Draw two flat paddle shapes on the sides. Add flat feet at the bottom for waddling!",
                draw(ctx, t) {
                    // Left flipper
                    ctx.beginPath();
                    ctx.moveTo(195, 175);
                    ctx.bezierCurveTo(165, 185 * t, 155, 235 * t, 170, 260 * t);
                    ctx.bezierCurveTo(178, 272 * t, 192, 265 * t, 195, 245 * t);
                    ctx.lineTo(195, 175);
                    ctx.stroke();
                    // Right flipper
                    ctx.beginPath();
                    ctx.moveTo(305, 175);
                    ctx.bezierCurveTo(335, 185 * t, 345, 235 * t, 330, 260 * t);
                    ctx.bezierCurveTo(322, 272 * t, 308, 265 * t, 305, 245 * t);
                    ctx.lineTo(305, 175);
                    ctx.stroke();
                    // Left foot
                    ctx.beginPath();
                    ctx.ellipse(228, 348, 20 * t, 9 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left toes
                    ctx.beginPath();
                    ctx.moveTo(213, 348);
                    ctx.lineTo(210, 348 + 12 * t);
                    ctx.moveTo(220, 347);
                    ctx.lineTo(218, 347 + 13 * t);
                    ctx.moveTo(228, 346);
                    ctx.lineTo(228, 346 + 13 * t);
                    ctx.moveTo(236, 347);
                    ctx.lineTo(238, 347 + 12 * t);
                    ctx.stroke();
                    // Right foot
                    ctx.beginPath();
                    ctx.ellipse(272, 348, 20 * t, 9 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(258, 348);
                    ctx.lineTo(256, 348 + 12 * t);
                    ctx.moveTo(265, 347);
                    ctx.lineTo(264, 347 + 13 * t);
                    ctx.moveTo(272, 346);
                    ctx.lineTo(272, 346 + 13 * t);
                    ctx.moveTo(280, 347);
                    ctx.lineTo(282, 347 + 12 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add the round head with white face patch!",
                voice: "The penguin's head merges right into the body! Draw a round head at the top, and add a white oval patch on the face.",
                draw(ctx, t) {
                    // Head outline
                    ctx.beginPath();
                    ctx.arc(250, 105, 48 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // White face patch
                    ctx.beginPath();
                    ctx.ellipse(250, 108, 32 * t, 36 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add eyes, orange beak and a small tail!",
                voice: "Give the penguin two big round eyes, an orange triangle beak — and a tiny little tail at the back. So cute!",
                draw(ctx, t) {
                    // Left eye
                    ctx.beginPath();
                    ctx.arc(232, 98, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Right eye
                    ctx.beginPath();
                    ctx.arc(268, 98, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Orange triangle beak
                    ctx.beginPath();
                    ctx.moveTo(243, 115);
                    ctx.lineTo(257, 115);
                    ctx.lineTo(250, 115 + 18 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // Tiny tail at back
                    ctx.beginPath();
                    ctx.moveTo(250, 338);
                    ctx.lineTo(240, 338 + 18 * t);
                    ctx.lineTo(260, 338 + 18 * t);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the outside body black!", voice: "Pick dark color and fill in the outer body — the sides, back, head and flippers. Leave the tummy white!", color: '#2F3542' },
            { text: "Paint the tummy patch white!", voice: "Use white to fill in the big oval tummy patch and the face patch. Penguins are black and white!", color: '#FFFFFF' },
            { text: "Color the beak and feet orange!", voice: "Use orange for the triangle beak and all those little toes. So bright!", color: '#FFA502' },
            { text: "Add dark eyes!", voice: "Fill in the eyes dark. Penguins have such sweet little eyes!", color: '#2F3542' },
            { text: "Paint the tail tip dark!", voice: "Use dark color on the tiny tail at the bottom. Waddle waddle!", color: '#2F3542' }
        ]
    },
    {
        id: 'owl',
        name: 'Owl',
        emoji: '\u{1F989}',
        category: 'animals',
        steps: [
            {
                text: "Draw the compact round body!",
                voice: "Let's draw a wise owl! Owls are very round and puffed up. Draw a big round body — like a fat egg shape!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 248, 80 * t, 95 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Feather texture lines at bottom
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.moveTo(195 + i * 22, 318);
                        ctx.quadraticCurveTo(206 + i * 22, 310 * t, 217 + i * 22, 318);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Draw the large round head with ear tufts!",
                voice: "Owls have HUGE heads compared to their bodies! Draw a big round head and add two little pointed tufts on top — those are feather ears! Hoo hoo!",
                draw(ctx, t) {
                    // Big round head
                    ctx.beginPath();
                    ctx.arc(250, 148, 70 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left ear tuft
                    ctx.beginPath();
                    ctx.moveTo(210, 100);
                    ctx.lineTo(200, 100 - 38 * t);
                    ctx.lineTo(222, 95);
                    ctx.closePath();
                    ctx.stroke();
                    // Right ear tuft
                    ctx.beginPath();
                    ctx.moveTo(290, 100);
                    ctx.lineTo(300, 100 - 38 * t);
                    ctx.lineTo(278, 95);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the enormous eye discs!",
                voice: "Owls have the biggest eyes of any bird! Draw two huge circles on the face for the eye discs — they should almost touch in the middle!",
                draw(ctx, t) {
                    // Left eye disc
                    ctx.beginPath();
                    ctx.arc(222, 152, 32 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left pupil
                    ctx.beginPath();
                    ctx.arc(222, 152, 16 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Right eye disc
                    ctx.beginPath();
                    ctx.arc(278, 152, 32 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right pupil
                    ctx.beginPath();
                    ctx.arc(278, 152, 16 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Facial disc edge lines radiating from each eye
                    ctx.beginPath();
                    ctx.moveTo(222, 118); ctx.lineTo(222, 112 * t / t || 112);
                    ctx.moveTo(250, 122); ctx.lineTo(250, 115 * t / t || 115);
                    ctx.moveTo(198, 130); ctx.lineTo(192, 125 * t / t || 125);
                    ctx.stroke();
                }
            },
            {
                text: "Add the hooked beak and folded wings!",
                voice: "Owls have a sharp downward-pointing beak! Draw a little hook shape in the middle. Then add folded wings on the sides of the body.",
                draw(ctx, t) {
                    // Hook beak
                    ctx.beginPath();
                    ctx.moveTo(244, 173);
                    ctx.lineTo(256, 173);
                    ctx.lineTo(256, 173 + 12 * t);
                    ctx.lineTo(244, 173 + 8 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // Left wing outline
                    ctx.beginPath();
                    ctx.moveTo(172, 218);
                    ctx.bezierCurveTo(155, 240 * t, 155, 300 * t, 170, 325 * t);
                    ctx.bezierCurveTo(180, 340 * t, 195, 340 * t, 200, 320 * t);
                    ctx.lineTo(172, 218);
                    ctx.stroke();
                    // Right wing outline
                    ctx.beginPath();
                    ctx.moveTo(328, 218);
                    ctx.bezierCurveTo(345, 240 * t, 345, 300 * t, 330, 325 * t);
                    ctx.bezierCurveTo(320, 340 * t, 305, 340 * t, 300, 320 * t);
                    ctx.lineTo(328, 218);
                    ctx.stroke();
                    // Wing feather lines
                    for (let i = 0; i < 4; i++) {
                        ctx.beginPath();
                        ctx.moveTo(165, 240 + i * 20);
                        ctx.lineTo(174, 240 + i * 20 + 10 * t);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(335, 240 + i * 20);
                        ctx.lineTo(326, 240 + i * 20 + 10 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Draw the branch and sharp talons!",
                voice: "Owls perch on branches and grab them with sharp curved claws called talons! Draw a branch across the bottom and curved talons gripping it. Hoo hoo!",
                draw(ctx, t) {
                    // Branch
                    ctx.beginPath();
                    ctx.moveTo(145, 360);
                    ctx.lineTo(145 + 210 * t, 360);
                    ctx.stroke();
                    // Branch texture
                    ctx.beginPath();
                    ctx.moveTo(150, 360);
                    ctx.lineTo(148, 360 + 8 * t);
                    ctx.moveTo(200, 358);
                    ctx.lineTo(198, 358 + 9 * t);
                    ctx.moveTo(260, 359);
                    ctx.lineTo(258, 359 + 9 * t);
                    ctx.moveTo(320, 358);
                    ctx.lineTo(318, 358 + 8 * t);
                    ctx.stroke();
                    // Left foot talons
                    ctx.beginPath();
                    ctx.moveTo(215, 342); ctx.bezierCurveTo(205, 355 * t, 195, 365 * t, 185, 360 * t);
                    ctx.moveTo(218, 342); ctx.bezierCurveTo(212, 358 * t, 208, 368 * t, 200, 365 * t);
                    ctx.moveTo(222, 342); ctx.bezierCurveTo(218, 358 * t, 220, 368 * t, 218, 364 * t);
                    ctx.moveTo(226, 342); ctx.bezierCurveTo(226, 356 * t, 232, 366 * t, 238, 362 * t);
                    ctx.stroke();
                    // Right foot talons
                    ctx.beginPath();
                    ctx.moveTo(262, 342); ctx.bezierCurveTo(258, 355 * t, 252, 365 * t, 244, 360 * t);
                    ctx.moveTo(266, 342); ctx.bezierCurveTo(264, 358 * t, 262, 368 * t, 260, 364 * t);
                    ctx.moveTo(270, 342); ctx.bezierCurveTo(270, 356 * t, 272, 366 * t, 272, 362 * t);
                    ctx.moveTo(274, 342); ctx.bezierCurveTo(276, 356 * t, 284, 366 * t, 290, 362 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body brown!", voice: "Pick brown and fill in the owl's big round body and head. A rich warm brown!", color: '#8B4513' },
            { text: "Paint the eye discs yellow!", voice: "Use yellow to fill in the big circles around the eyes. Owls have glowing golden eyes!", color: '#ECCC68' },
            { text: "Color the pupils and beak dark!", voice: "Use dark color to fill in the big pupils and the sharp hooked beak.", color: '#2F3542' },
            { text: "Paint the wing feathers darker!", voice: "Use dark color on the wing shapes to make the feathers stand out.", color: '#2F3542' },
            { text: "Color the branch and talons brown!", voice: "Paint the branch and sharp claws with brown. So regal!", color: '#8B4513' }
        ]
    },
    {
        id: 'butterfly',
        name: 'Butterfly',
        emoji: '\u{1F98B}',
        category: 'animals',
        steps: [
            {
                text: "Draw the segmented body!",
                voice: "Let's draw a beautiful butterfly! Start with a thin segmented body — like a tiny sausage made of little bumps. Butterflies have three parts to their body!",
                draw(ctx, t) {
                    // Head
                    ctx.beginPath();
                    ctx.arc(250, 148, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Thorax
                    ctx.beginPath();
                    ctx.ellipse(250, 175, 9 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Abdomen — longer
                    ctx.beginPath();
                    ctx.ellipse(250, 215, 7 * t, 32 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Abdomen tip
                    ctx.beginPath();
                    ctx.ellipse(250, 253, 5 * t, 12 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big upper wings!",
                voice: "The top wings are the biggest! Draw two large rounded triangle shapes coming out from the thorax. Make them wide and sweeping!",
                draw(ctx, t) {
                    // Left upper wing
                    ctx.beginPath();
                    ctx.moveTo(242, 172);
                    ctx.bezierCurveTo(220, 148, 155, 130 * t, 110, 165 * t);
                    ctx.bezierCurveTo(90, 195 * t, 105, 235 * t, 140, 240 * t);
                    ctx.bezierCurveTo(175, 245 * t, 225, 215 * t, 242, 193);
                    ctx.stroke();
                    // Right upper wing
                    ctx.beginPath();
                    ctx.moveTo(258, 172);
                    ctx.bezierCurveTo(280, 148, 345, 130 * t, 390, 165 * t);
                    ctx.bezierCurveTo(410, 195 * t, 395, 235 * t, 360, 240 * t);
                    ctx.bezierCurveTo(325, 245 * t, 275, 215 * t, 258, 193);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the smaller lower wings!",
                voice: "Butterflies have four wings — and the bottom two are smaller and rounder. Draw two round wings coming from the lower body!",
                draw(ctx, t) {
                    // Left lower wing
                    ctx.beginPath();
                    ctx.moveTo(244, 200);
                    ctx.bezierCurveTo(215, 210, 150, 235 * t, 140, 275 * t);
                    ctx.bezierCurveTo(135, 305 * t, 165, 325 * t, 200, 310 * t);
                    ctx.bezierCurveTo(228, 298 * t, 245, 265 * t, 244, 230);
                    ctx.stroke();
                    // Right lower wing
                    ctx.beginPath();
                    ctx.moveTo(256, 200);
                    ctx.bezierCurveTo(285, 210, 350, 235 * t, 360, 275 * t);
                    ctx.bezierCurveTo(365, 305 * t, 335, 325 * t, 300, 310 * t);
                    ctx.bezierCurveTo(272, 298 * t, 255, 265 * t, 256, 230);
                    ctx.stroke();
                }
            },
            {
                text: "Add curling antennae with tips!",
                voice: "Butterflies have long antennae with little balls on the ends! Draw two curling lines from the head and add a dot on each tip.",
                draw(ctx, t) {
                    // Left antenna
                    ctx.beginPath();
                    ctx.moveTo(244, 140);
                    ctx.bezierCurveTo(230, 115, 205, 100 * t, 192, 90 * t);
                    ctx.stroke();
                    // Left tip ball
                    ctx.beginPath();
                    ctx.arc(192, 90, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Right antenna
                    ctx.beginPath();
                    ctx.moveTo(256, 140);
                    ctx.bezierCurveTo(270, 115, 295, 100 * t, 308, 90 * t);
                    ctx.stroke();
                    // Right tip ball
                    ctx.beginPath();
                    ctx.arc(308, 90, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw beautiful wing patterns!",
                voice: "Butterfly wings have amazing patterns! Draw large circles on the upper wings and smaller ones on the lower wings. Add curving lines for veins!",
                draw(ctx, t) {
                    // Large eye spots on upper wings
                    ctx.beginPath();
                    ctx.arc(175, 185, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(175, 185, 10 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(325, 185, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(325, 185, 10 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Smaller spots upper wings
                    ctx.beginPath();
                    ctx.arc(135, 175, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(365, 175, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Lower wing spots
                    ctx.beginPath();
                    ctx.arc(178, 278, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(322, 278, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Wing vein lines
                    ctx.beginPath();
                    ctx.moveTo(242, 190);
                    ctx.lineTo(155, 190 - 5 * t);
                    ctx.moveTo(242, 200);
                    ctx.lineTo(142, 235 * t);
                    ctx.moveTo(258, 190);
                    ctx.lineTo(345, 190 - 5 * t);
                    ctx.moveTo(258, 200);
                    ctx.lineTo(358, 235 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the upper wings orange!", voice: "Pick orange and fill in both big upper wings. A warm sunset orange!", color: '#FFA502' },
            { text: "Paint the lower wings red!", voice: "Use red to fill in both smaller lower wings. So vibrant!", color: '#FF4757' },
            { text: "Color the body dark!", voice: "Use dark color to fill in the segmented body from head to tail.", color: '#2F3542' },
            { text: "Paint the eye spots yellow!", voice: "Use yellow to fill in the large circle spots on the upper wings. Leave the dark center!", color: '#ECCC68' },
            { text: "Color the antennae and veins dark!", voice: "Use dark color on the long antennae and the vein lines on the wings!", color: '#2F3542' }
        ]
    },
    {
        id: 'octopus',
        name: 'Octopus',
        emoji: '\u{1F419}',
        category: 'animals',
        steps: [
            {
                text: "Draw the big dome head!",
                voice: "Let's draw an amazing octopus! Draw a big smooth dome shape — like an upside-down bowl — for the head. Octopuses have huge heads!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(180, 185);
                    ctx.bezierCurveTo(180, 85 * t, 320, 85 * t, 320, 185);
                    ctx.bezierCurveTo(320, 220 * t, 300, 240 * t, 280, 240 * t);
                    ctx.lineTo(220, 240 * t);
                    ctx.bezierCurveTo(200, 240 * t, 180, 220 * t, 180, 185);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the first four tentacles!",
                voice: "Octopuses have EIGHT arms! Let's draw the first four. Each one curves in a different direction and gets thinner at the tip. Squish squish!",
                draw(ctx, t) {
                    // Tentacle 1 — far left, sweeps out and down
                    ctx.beginPath();
                    ctx.moveTo(205, 232);
                    ctx.bezierCurveTo(175, 265 * t, 135, 310 * t, 110, 355 * t);
                    ctx.bezierCurveTo(105, 365 * t, 112, 370 * t, 118, 362 * t);
                    ctx.stroke();
                    // Tentacle 2 — sweeps down-left
                    ctx.beginPath();
                    ctx.moveTo(222, 238);
                    ctx.bezierCurveTo(205, 280 * t, 185, 325 * t, 175, 375 * t);
                    ctx.bezierCurveTo(174, 382 * t, 182, 382 * t, 184, 374 * t);
                    ctx.stroke();
                    // Tentacle 3 — sweeps down-right
                    ctx.beginPath();
                    ctx.moveTo(278, 238);
                    ctx.bezierCurveTo(295, 280 * t, 315, 325 * t, 325, 375 * t);
                    ctx.bezierCurveTo(326, 382 * t, 318, 382 * t, 316, 374 * t);
                    ctx.stroke();
                    // Tentacle 4 — far right, sweeps out and down
                    ctx.beginPath();
                    ctx.moveTo(295, 232);
                    ctx.bezierCurveTo(325, 265 * t, 365, 310 * t, 390, 355 * t);
                    ctx.bezierCurveTo(395, 365 * t, 388, 370 * t, 382, 362 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw four more curling tentacles!",
                voice: "Four more arms! These ones curl in different ways — some go forward, some twist back. Every octopus arm has its own personality!",
                draw(ctx, t) {
                    // Tentacle 5 — curls left outward
                    ctx.beginPath();
                    ctx.moveTo(210, 235);
                    ctx.bezierCurveTo(160, 270 * t, 120, 290 * t, 95, 270 * t);
                    ctx.bezierCurveTo(80, 255 * t, 90, 238 * t, 100, 245 * t);
                    ctx.stroke();
                    // Tentacle 6 — curls down and loops
                    ctx.beginPath();
                    ctx.moveTo(237, 240);
                    ctx.bezierCurveTo(225, 295 * t, 215, 345 * t, 235, 385 * t);
                    ctx.bezierCurveTo(245, 398 * t, 258, 390 * t, 250, 376 * t);
                    ctx.stroke();
                    // Tentacle 7 — curls down loops other side
                    ctx.beginPath();
                    ctx.moveTo(263, 240);
                    ctx.bezierCurveTo(275, 295 * t, 285, 345 * t, 265, 385 * t);
                    ctx.bezierCurveTo(255, 398 * t, 242, 390 * t, 250, 376 * t);
                    ctx.stroke();
                    // Tentacle 8 — curls right outward
                    ctx.beginPath();
                    ctx.moveTo(290, 235);
                    ctx.bezierCurveTo(340, 270 * t, 380, 290 * t, 405, 270 * t);
                    ctx.bezierCurveTo(420, 255 * t, 410, 238 * t, 400, 245 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big eyes and smiley face!",
                voice: "Octopuses have huge round eyes! Draw two big circles on the face with pupils inside, and a cute little smiley mouth underneath.",
                draw(ctx, t) {
                    // Left eye — big circle
                    ctx.beginPath();
                    ctx.arc(222, 155, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(222, 155, 11 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Right eye
                    ctx.beginPath();
                    ctx.arc(278, 155, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(278, 155, 11 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Smiley mouth
                    ctx.beginPath();
                    ctx.arc(250, 193, 14, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                }
            },
            {
                text: "Add suction cups on the tentacles!",
                voice: "Octopus arms are covered in suction cups — little circles they use to grab things! Draw small circles along the inside of each arm. So cool!",
                draw(ctx, t) {
                    const spots = [
                        // Tentacle 1 outer
                        [152, 290], [132, 328], [118, 358],
                        // Tentacle 2
                        [196, 302], [184, 345], [178, 375],
                        // Tentacle 3
                        [304, 302], [316, 345], [322, 375],
                        // Tentacle 4
                        [348, 290], [368, 328], [382, 358],
                        // Tentacle 5
                        [140, 272], [110, 262],
                        // Tentacle 8
                        [360, 272], [390, 262],
                        // Tentacle 6
                        [228, 320], [234, 368],
                        // Tentacle 7
                        [272, 320], [266, 368],
                    ];
                    for (const [x, y] of spots) {
                        ctx.beginPath();
                        ctx.arc(x, y, 5 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the head purple!", voice: "Pick purple and fill in the big smooth dome head. A deep ocean purple!", color: '#A855F7' },
            { text: "Paint all eight tentacles purple!", voice: "Use the same purple to color every single wiggly arm. All eight of them!", color: '#A855F7' },
            { text: "Color the suction cups pink!", voice: "Use pink to fill in all the little suction cup circles on the arms!", color: '#FF6B81' },
            { text: "Add light purple belly!", voice: "Use light purple to paint the lower part of the head lighter — like a glowing belly!", color: '#D580FF' },
            { text: "Paint dark eyes!", voice: "Use dark color to fill in the big pupils. Octopuses have the most mysterious eyes!", color: '#2F3542' }
        ]
    }
];
