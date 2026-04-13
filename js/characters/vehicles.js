export const vehicles = [
    {
        id: 'police',
        name: 'Police Car',
        emoji: '\u{1F694}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the car body!",
                voice: "Let's draw a police car! Start with the big wide body — it goes low to the ground like a real police cruiser.",
                draw(ctx, t) {
                    // Main lower body — wide sedan shape
                    ctx.beginPath();
                    ctx.moveTo(80, 255);
                    ctx.lineTo(80 + 10 * t, 255 - 5 * t);
                    ctx.lineTo(80 + 340 * t, 255 - 5 * t);
                    ctx.lineTo(80 + 350 * t, 255);
                    ctx.lineTo(80 + 350 * t, 255 + 45 * t);
                    ctx.lineTo(80, 255 + 45 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // Hood section — slight slope up from front
                    ctx.beginPath();
                    ctx.moveTo(80, 250);
                    ctx.lineTo(80 + 70 * t, 250 - 15 * t);
                    ctx.stroke();
                    // Trunk section — slight slope up from rear
                    ctx.beginPath();
                    ctx.moveTo(430, 250);
                    ctx.lineTo(430 - 70 * t, 250 - 15 * t);
                    ctx.stroke();
                    // Front bumper
                    ctx.beginPath();
                    ctx.moveTo(78, 285);
                    ctx.lineTo(78 - 6 * t, 285 + 10 * t);
                    ctx.lineTo(78 - 6 * t + 14 * t, 285 + 10 * t);
                    ctx.stroke();
                    // Rear bumper
                    ctx.beginPath();
                    ctx.moveTo(432, 285);
                    ctx.lineTo(432 + 6 * t, 285 + 10 * t);
                    ctx.lineTo(432 + 6 * t - 14 * t, 285 + 10 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add the curved roofline!",
                voice: "Real police cars have a curved roofline — not a flat box! Let's draw that sleek shape on top.",
                draw(ctx, t) {
                    // Roofline with curves — windshield angled, roof arc, rear window angled
                    ctx.beginPath();
                    ctx.moveTo(150, 250);                           // base of windshield
                    ctx.lineTo(150 + 40 * t, 250 - 65 * t);        // windshield top-left
                    ctx.quadraticCurveTo(
                        250, 250 - 80 * t,                          // roof peak control
                        150 + 200 * t, 250 - 65 * t                 // roof top-right
                    );
                    ctx.lineTo(150 + 230 * t, 250);                 // base of rear window
                    ctx.stroke();
                    // Door line separating front and rear door
                    ctx.beginPath();
                    ctx.moveTo(255, 250);
                    ctx.lineTo(255, 255 + 45 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the windows!",
                voice: "Time for the windows! The windshield is angled and there are two side windows. Can you see the officer inside?",
                draw(ctx, t) {
                    // Windshield — angled parallelogram
                    ctx.beginPath();
                    ctx.moveTo(152, 248);
                    ctx.lineTo(152 + 38 * t, 248 - 60 * t);
                    ctx.lineTo(152 + 38 * t + 55 * t, 248 - 60 * t);
                    ctx.lineTo(152 + 55 * t, 248);
                    ctx.closePath();
                    ctx.stroke();
                    // Front side window
                    ctx.beginPath();
                    ctx.moveTo(215, 248);
                    ctx.lineTo(215 + 5 * t, 248 - 55 * t);
                    ctx.lineTo(215 + 5 * t + 40 * t, 248 - 55 * t);
                    ctx.lineTo(215 + 40 * t, 248);
                    ctx.closePath();
                    ctx.stroke();
                    // Rear side window
                    ctx.beginPath();
                    ctx.moveTo(263, 248);
                    ctx.lineTo(263 + 3 * t, 248 - 55 * t);
                    ctx.lineTo(263 + 3 * t + 45 * t, 248 - 55 * t);
                    ctx.lineTo(263 + 45 * t, 248);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add the two wheels!",
                voice: "Every police car needs big wheels to chase the bad guys! Draw two circles with hub caps inside.",
                draw(ctx, t) {
                    // Front wheel
                    ctx.beginPath();
                    ctx.arc(155, 300, 30 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(155, 300, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hub spokes front
                    for (let i = 0; i < 5; i++) {
                        const angle = (i / 5) * Math.PI * 2;
                        ctx.beginPath();
                        ctx.moveTo(155 + 5 * t * Math.cos(angle), 300 + 5 * t * Math.sin(angle));
                        ctx.lineTo(155 + 13 * t * Math.cos(angle), 300 + 13 * t * Math.sin(angle));
                        ctx.stroke();
                    }
                    // Rear wheel
                    ctx.beginPath();
                    ctx.arc(365, 300, 30 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(365, 300, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hub spokes rear
                    for (let i = 0; i < 5; i++) {
                        const angle = (i / 5) * Math.PI * 2;
                        ctx.beginPath();
                        ctx.moveTo(365 + 5 * t * Math.cos(angle), 300 + 5 * t * Math.sin(angle));
                        ctx.lineTo(365 + 13 * t * Math.cos(angle), 300 + 13 * t * Math.sin(angle));
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Put the light bar on top!",
                voice: "Now for the best part — the siren light bar! Two lights on the roof go woo-woo-woo! Draw a long bar with two round lights.",
                draw(ctx, t) {
                    // Light bar base
                    ctx.beginPath();
                    roundRect(ctx, 205, 182, 110 * t, 16, 4);
                    ctx.stroke();
                    // Left light (red)
                    ctx.beginPath();
                    ctx.arc(205 + 22 * t, 182 + 8, 7 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right light (blue)
                    ctx.beginPath();
                    ctx.arc(205 + 88 * t, 182 + 8, 7 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Headlights
                    ctx.beginPath();
                    roundRect(ctx, 82, 255, 18 * t, 10, 2);
                    ctx.stroke();
                    // Taillights
                    ctx.beginPath();
                    roundRect(ctx, 430 - 18 * t, 255, 18 * t, 10, 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the finishing details!",
                voice: "Almost done! Add the headlights, a little badge on the door, and some stripes. This police car is ready to roll!",
                draw(ctx, t) {
                    // Police star badge on door
                    ctx.beginPath();
                    ctx.arc(320, 265, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Star points
                    for (let i = 0; i < 6; i++) {
                        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                        ctx.beginPath();
                        ctx.moveTo(320 + 5 * t * Math.cos(angle), 265 + 5 * t * Math.sin(angle));
                        ctx.lineTo(320 + 10 * t * Math.cos(angle), 265 + 10 * t * Math.sin(angle));
                        ctx.stroke();
                    }
                    // Side stripe along body
                    ctx.beginPath();
                    ctx.moveTo(80, 268);
                    ctx.lineTo(80 + 350 * t, 268);
                    ctx.stroke();
                    // Door handle front
                    ctx.beginPath();
                    ctx.moveTo(225, 263);
                    ctx.lineTo(225 + 18 * t, 263);
                    ctx.stroke();
                    // Door handle rear
                    ctx.beginPath();
                    ctx.moveTo(300, 263);
                    ctx.lineTo(300 + 18 * t, 263);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the car body blue!", voice: "Police cars are dark blue — paint the whole body!", color: '#1E90FF' },
            { text: "Paint the roof white!", voice: "The top is white, like a real patrol car!", color: '#FFFFFF' },
            { text: "Paint the wheels black!", voice: "Big black tires for the police car!", color: '#2F3542' },
            { text: "Paint the light bar red!", voice: "The siren is bright red — woo woo!", color: '#FF4757' },
            { text: "Paint the windows dark!", voice: "Dark windows so the officer looks mysterious!", color: '#2F3542' },
            { text: "Paint the badge gold!", voice: "A shiny gold police badge on the door!", color: '#FFA502' }
        ]
    },
    {
        id: 'bus',
        name: 'School Bus',
        emoji: '\u{1F68C}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the long bus body!",
                voice: "School buses are long and bright! Let's draw the big rectangular body with nice rounded corners.",
                draw(ctx, t) {
                    // Main body
                    ctx.beginPath();
                    roundRect(ctx, 55, 195, 380 * t, 110, 8);
                    ctx.stroke();
                    // Hood section — short flat front
                    ctx.beginPath();
                    ctx.moveTo(55, 215);
                    ctx.lineTo(55 - 25 * t, 215);
                    ctx.lineTo(55 - 25 * t, 260);
                    ctx.lineTo(55, 260);
                    ctx.stroke();
                    // Roof rack line
                    ctx.beginPath();
                    ctx.moveTo(55, 195);
                    ctx.lineTo(55 + 380 * t, 195);
                    ctx.stroke();
                }
            },
            {
                text: "Add the big windshield and front!",
                voice: "The front of a school bus is flat and tall with a huge windshield so the driver can see all the kids!",
                draw(ctx, t) {
                    // Large windshield on flat front
                    ctx.beginPath();
                    roundRect(ctx, 55 - 22 * t, 200, 20 * t, 45, 3);
                    ctx.stroke();
                    // Front grille
                    ctx.beginPath();
                    ctx.moveTo(55 - 25 * t, 260);
                    ctx.lineTo(55 - 25 * t, 275);
                    ctx.lineTo(55, 275);
                    ctx.stroke();
                    // Grille slats
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.moveTo(55 - 24 * t, 262 + i * 4 * t);
                        ctx.lineTo(55 - 3 * t, 262 + i * 4 * t);
                        ctx.stroke();
                    }
                    // Headlights
                    ctx.beginPath();
                    ctx.arc(55 - 12 * t, 210, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Front bumper
                    ctx.beginPath();
                    roundRect(ctx, 55 - 28 * t, 275, 30 * t, 8, 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a row of windows!",
                voice: "Row after row of windows — that's where all the kids sit! Draw five evenly spaced rectangles along the side.",
                draw(ctx, t) {
                    // 5 side windows
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        roundRect(ctx, 80 + i * 58, 205, 42 * t, 38, 4);
                        ctx.stroke();
                        // Window divider
                        ctx.beginPath();
                        ctx.moveTo(80 + i * 58 + 21 * t, 205);
                        ctx.lineTo(80 + i * 58 + 21 * t, 205 + 38 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add the door and stop sign arm!",
                voice: "School buses have a special door at the front right — and a stop sign that pops out when kids get off. Safety first!",
                draw(ctx, t) {
                    // Door — two panel door near front right of body
                    ctx.beginPath();
                    roundRect(ctx, 410, 215, 24 * t, 80, 3);
                    ctx.stroke();
                    // Door divider horizontal
                    ctx.beginPath();
                    ctx.moveTo(410, 255);
                    ctx.lineTo(410 + 24 * t, 255);
                    ctx.stroke();
                    // Door handle
                    ctx.beginPath();
                    ctx.arc(414, 248, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Stop sign arm — extends from mid body
                    ctx.beginPath();
                    ctx.moveTo(55, 250);
                    ctx.lineTo(55 - 45 * t, 250);
                    ctx.stroke();
                    // Octagonal stop sign
                    const sx = 55 - 57 * t;
                    const sy = 250;
                    const sr = 12 * t;
                    ctx.beginPath();
                    for (let i = 0; i < 8; i++) {
                        const angle = (i / 8) * Math.PI * 2 - Math.PI / 8;
                        const px = sx + sr * Math.cos(angle);
                        const py = sy + sr * Math.sin(angle);
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the two big wheels!",
                voice: "Big wheels to carry all those kids to school! Draw two large circles with hub caps in the middle.",
                draw(ctx, t) {
                    // Wheel wells
                    ctx.beginPath();
                    ctx.arc(130, 305, 38 * t, Math.PI, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(380, 305, 38 * t, Math.PI, Math.PI * 2);
                    ctx.stroke();
                    // Front wheel full circle
                    ctx.beginPath();
                    ctx.arc(130, 305, 33 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(130, 305, 16 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Rear wheel full circle
                    ctx.beginPath();
                    ctx.arc(380, 305, 33 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(380, 305, 16 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hub spokes
                    [130, 380].forEach(cx => {
                        for (let i = 0; i < 6; i++) {
                            const angle = (i / 6) * Math.PI * 2;
                            ctx.beginPath();
                            ctx.moveTo(cx + 4 * t * Math.cos(angle), 305 + 4 * t * Math.sin(angle));
                            ctx.lineTo(cx + 15 * t * Math.cos(angle), 305 + 15 * t * Math.sin(angle));
                            ctx.stroke();
                        }
                    });
                }
            },
            {
                text: "Finish with the roof details!",
                voice: "Last step! Add the emergency flashers on top, the rear bumper, and the taillights. The school bus is ready to pick up kids!",
                draw(ctx, t) {
                    // Roof flashers (two squares on top)
                    ctx.beginPath();
                    roundRect(ctx, 200, 183, 20 * t, 12, 2);
                    ctx.stroke();
                    ctx.beginPath();
                    roundRect(ctx, 270, 183, 20 * t, 12, 2);
                    ctx.stroke();
                    // Rear taillights
                    ctx.beginPath();
                    roundRect(ctx, 431, 215, 10 * t, 18, 2);
                    ctx.stroke();
                    ctx.beginPath();
                    roundRect(ctx, 431, 245, 10 * t, 18, 2);
                    ctx.stroke();
                    // Rear bumper
                    ctx.beginPath();
                    roundRect(ctx, 430, 290, 16 * t, 10, 2);
                    ctx.stroke();
                    // "SCHOOL BUS" text lines (simplified as two bars)
                    ctx.beginPath();
                    ctx.moveTo(160, 257);
                    ctx.lineTo(160 + 150 * t, 257);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body bright yellow!", voice: "School buses are the brightest yellow you can imagine! Paint it all!", color: '#ECCC68' },
            { text: "Paint the wheels black!", voice: "Nice black rubber tires to roll down the road!", color: '#2F3542' },
            { text: "Paint the windows blue!", voice: "Clear blue windows so the kids can look outside!", color: '#70A1FF' },
            { text: "Paint the stop sign red!", voice: "The stop sign is bright red — STOP means STOP!", color: '#FF4757' },
            { text: "Paint the bumpers black!", voice: "Sturdy black bumpers on the front and back!", color: '#2F3542' },
            { text: "Paint the roof lights orange!", voice: "Flashing orange lights on the roof for safety!", color: '#FFA502' }
        ]
    },
    {
        id: 'truck',
        name: 'Big Truck',
        emoji: '\u{1F69A}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the cargo container!",
                voice: "Big trucks carry huge loads! Let's start with the enormous cargo container — it's the biggest part of the truck.",
                draw(ctx, t) {
                    // Large cargo box
                    ctx.beginPath();
                    roundRect(ctx, 60, 155, 250 * t, 130, 5);
                    ctx.stroke();
                    // Horizontal plank lines on cargo box
                    for (let i = 1; i < 4; i++) {
                        ctx.beginPath();
                        ctx.moveTo(60, 155 + i * 32 * t);
                        ctx.lineTo(60 + 250 * t, 155 + i * 32 * t);
                        ctx.stroke();
                    }
                    // Rear door vertical line (double doors)
                    ctx.beginPath();
                    ctx.moveTo(60 + 125 * t, 155);
                    ctx.lineTo(60 + 125 * t, 155 + 130 * t);
                    ctx.stroke();
                    // Rear door handles
                    ctx.beginPath();
                    ctx.arc(60 + 110 * t, 155 + 65 * t, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(60 + 140 * t, 155 + 65 * t, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the cab!",
                voice: "Now draw the cab — that's where the driver sits up really high! It's smaller than the cargo box but very tall.",
                draw(ctx, t) {
                    // Cab body
                    ctx.beginPath();
                    ctx.moveTo(310, 175);
                    ctx.lineTo(310, 285);
                    ctx.lineTo(310 + 115 * t, 285);
                    ctx.lineTo(310 + 115 * t, 220);
                    ctx.quadraticCurveTo(310 + 115 * t, 175, 310 + 80 * t, 175);
                    ctx.closePath();
                    ctx.stroke();
                    // Gap between cab and cargo
                    ctx.beginPath();
                    ctx.moveTo(308, 175);
                    ctx.lineTo(308, 285);
                    ctx.stroke();
                    // Fuel tank between cab and cargo bottom
                    ctx.beginPath();
                    roundRect(ctx, 310, 245, 20 * t, 40, 3);
                    ctx.stroke();
                }
            },
            {
                text: "Add the cab window and details!",
                voice: "The driver's window is big so they can see the road ahead! Add a mirror sticking out too — truck drivers need to see way behind them.",
                draw(ctx, t) {
                    // Large windshield
                    ctx.beginPath();
                    ctx.moveTo(320, 178);
                    ctx.lineTo(316, 178 + 55 * t);
                    ctx.lineTo(316 + 70 * t, 178 + 55 * t);
                    ctx.lineTo(316 + 70 * t, 178 + 10 * t);
                    ctx.quadraticCurveTo(316 + 70 * t, 178, 316 + 55 * t, 178);
                    ctx.closePath();
                    ctx.stroke();
                    // Side window
                    ctx.beginPath();
                    roundRect(ctx, 390, 185, 28 * t, 35, 3);
                    ctx.stroke();
                    // Side mirror — extends out from cab
                    ctx.beginPath();
                    ctx.moveTo(425, 200);
                    ctx.lineTo(425 + 18 * t, 200);
                    ctx.stroke();
                    ctx.beginPath();
                    roundRect(ctx, 425 + 14 * t, 195, 10 * t, 16, 2);
                    ctx.stroke();
                    // Exhaust stack on cab roof
                    ctx.beginPath();
                    ctx.moveTo(380, 175);
                    ctx.lineTo(380, 175 - 35 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(380, 175 - 35 * t, 6 * t, Math.PI, Math.PI * 2);
                    ctx.stroke();
                    // Headlight on cab front
                    ctx.beginPath();
                    roundRect(ctx, 422, 225, 12 * t, 10, 2);
                    ctx.stroke();
                    ctx.beginPath();
                    roundRect(ctx, 422, 240, 12 * t, 8, 2);
                    ctx.stroke();
                    // Front grille
                    ctx.beginPath();
                    ctx.moveTo(425 * t + 0, 255);
                    for (let i = 0; i < 4; i++) {
                        ctx.moveTo(420, 257 + i * 5 * t);
                        ctx.lineTo(420 + 15 * t, 257 + i * 5 * t);
                    }
                    ctx.stroke();
                }
            },
            {
                text: "Add lots of wheels!",
                voice: "Big trucks have SO many wheels — let's draw six! Two at the front and four huge dual wheels at the rear. That's what makes them so powerful!",
                draw(ctx, t) {
                    // Front axle single wheel
                    ctx.beginPath();
                    ctx.arc(395, 305, 26 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(395, 305, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Rear dual wheel set — outer
                    ctx.beginPath();
                    ctx.arc(220, 305, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(220, 305, 13 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Rear dual wheel set — inner (offset slightly)
                    ctx.beginPath();
                    ctx.arc(220, 305, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Second rear axle
                    ctx.beginPath();
                    ctx.arc(155, 305, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(155, 305, 13 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(155, 305, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hub spokes on all wheels
                    [395, 220, 155].forEach(cx => {
                        for (let i = 0; i < 6; i++) {
                            const angle = (i / 6) * Math.PI * 2;
                            ctx.beginPath();
                            ctx.moveTo(cx + 3 * t * Math.cos(angle), 305 + 3 * t * Math.sin(angle));
                            ctx.lineTo(cx + 11 * t * Math.cos(angle), 305 + 11 * t * Math.sin(angle));
                            ctx.stroke();
                        }
                    });
                }
            },
            {
                text: "Add the bumper and finishing touches!",
                voice: "Last step! A big chrome bumper on the front, some mud flaps behind the rear wheels, and the truck logo. This big rig is ready to roll down the highway!",
                draw(ctx, t) {
                    // Front bumper — wide chrome bar
                    ctx.beginPath();
                    roundRect(ctx, 417, 275, 20 * t, 12, 3);
                    ctx.stroke();
                    // Step below cab door
                    ctx.beginPath();
                    ctx.moveTo(330, 285);
                    ctx.lineTo(330 + 50 * t, 285);
                    ctx.lineTo(330 + 50 * t, 285 + 10 * t);
                    ctx.lineTo(330, 285 + 10 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // Mud flaps behind rear wheels
                    ctx.beginPath();
                    ctx.moveTo(248, 285);
                    ctx.lineTo(248, 285 + 28 * t);
                    ctx.lineTo(248 + 8 * t, 285 + 28 * t);
                    ctx.lineTo(248 + 8 * t, 285);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(183, 285);
                    ctx.lineTo(183, 285 + 28 * t);
                    ctx.lineTo(183 + 8 * t, 285 + 28 * t);
                    ctx.lineTo(183 + 8 * t, 285);
                    ctx.stroke();
                    // Cab door outline
                    ctx.beginPath();
                    ctx.moveTo(325, 245);
                    ctx.lineTo(325 + 60 * t, 245);
                    ctx.lineTo(325 + 60 * t, 285);
                    ctx.lineTo(325, 285);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the cargo container white!", voice: "The big cargo box is white — ready to carry anything!", color: '#FFFFFF' },
            { text: "Paint the cab red!", voice: "Truck cabs are often bright red — so cool!", color: '#FF4757' },
            { text: "Paint the wheels black!", voice: "Huge black tires for the big truck!", color: '#2F3542' },
            { text: "Paint the bumper silver!", voice: "A shiny chrome bumper on the front!", color: '#ECCC68' },
            { text: "Paint the windows blue!", voice: "Nice blue windows for the driver!", color: '#70A1FF' },
            { text: "Paint the exhaust stack dark!", voice: "The smokestack is dark metal — chugga chugga!", color: '#2F3542' }
        ]
    },
    {
        id: 'racecar',
        name: 'Race Car',
        emoji: '\u{1F3CE}\u{FE0F}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the super low body!",
                voice: "Race cars zoom super fast and sit really low to the ground! Let's draw that super wide wedge shape — it's pointy at the front and wide at the back.",
                draw(ctx, t) {
                    // Main body wedge — very low and wide
                    ctx.beginPath();
                    ctx.moveTo(90, 265);                              // front nose tip
                    ctx.bezierCurveTo(
                        90 + 30 * t, 265 - 5 * t,
                        90 + 50 * t, 265 - 30 * t,
                        90 + 90 * t, 265 - 45 * t                    // cockpit left edge
                    );
                    ctx.lineTo(90 + 240 * t, 265 - 45 * t);          // cockpit right edge / body top
                    ctx.bezierCurveTo(
                        90 + 280 * t, 265 - 45 * t,
                        90 + 310 * t, 265 - 20 * t,
                        90 + 330 * t, 265                             // rear corner
                    );
                    ctx.lineTo(90, 265);
                    ctx.closePath();
                    ctx.stroke();
                    // Front splitter/nose piece
                    ctx.beginPath();
                    ctx.moveTo(90, 265);
                    ctx.lineTo(90 - 20 * t, 265 + 4 * t);
                    ctx.lineTo(90 - 20 * t + 50 * t, 265 + 4 * t);
                    ctx.lineTo(90 + 40 * t, 265);
                    ctx.closePath();
                    ctx.stroke();
                    // Body underside flat line
                    ctx.beginPath();
                    ctx.moveTo(90, 265);
                    ctx.lineTo(90 + 330 * t, 265);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the cockpit and windshield!",
                voice: "The driver sits in a tiny cockpit — it's like a little bubble! The windshield curves over the top to cut through the air like a rocket!",
                draw(ctx, t) {
                    // Cockpit opening
                    ctx.beginPath();
                    ctx.moveTo(195, 220);
                    ctx.bezierCurveTo(
                        195 + 10 * t, 220 - 20 * t,
                        195 + 50 * t, 220 - 30 * t,
                        195 + 95 * t, 220 - 20 * t
                    );
                    ctx.lineTo(195 + 95 * t, 220);
                    ctx.lineTo(195, 220);
                    ctx.closePath();
                    ctx.stroke();
                    // Windshield curved visor
                    ctx.beginPath();
                    ctx.moveTo(195, 220);
                    ctx.bezierCurveTo(
                        195 - 10 * t, 220 - 15 * t,
                        195 - 15 * t, 220 - 40 * t,
                        195 + 5 * t, 220 - 50 * t
                    );
                    ctx.bezierCurveTo(
                        195 + 30 * t, 220 - 60 * t,
                        195 + 65 * t, 220 - 55 * t,
                        195 + 85 * t, 220 - 40 * t
                    );
                    ctx.lineTo(195 + 95 * t, 220 - 20 * t);
                    ctx.stroke();
                    // Helmet silhouette in cockpit
                    ctx.beginPath();
                    ctx.arc(230, 215, 14 * t, Math.PI * 0.7, Math.PI * 2.3);
                    ctx.stroke();
                }
            },
            {
                text: "Add the four huge wide wheels!",
                voice: "Race car wheels are super wide and super grippy — they hug the track! Draw four big wide ovals. Vroom vroom!",
                draw(ctx, t) {
                    // Front-left wheel (wide oval)
                    ctx.beginPath();
                    ctx.ellipse(148, 272, 18 * t, 28 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(148, 272, 8 * t, 14 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Front-right wheel
                    ctx.beginPath();
                    ctx.ellipse(148, 272, 18 * t, 28 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Rear-left wheel (larger)
                    ctx.beginPath();
                    ctx.ellipse(360, 272, 22 * t, 32 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(360, 272, 10 * t, 16 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Wheel hubs
                    [148, 360].forEach(cx => {
                        const hr = cx === 148 ? 7 * t : 9 * t;
                        for (let i = 0; i < 5; i++) {
                            const angle = (i / 5) * Math.PI * 2;
                            ctx.beginPath();
                            ctx.moveTo(cx + 3 * t * Math.cos(angle), 272 + 4 * t * Math.sin(angle));
                            ctx.lineTo(cx + hr * Math.cos(angle), 272 + hr * Math.sin(angle));
                            ctx.stroke();
                        }
                    });
                }
            },
            {
                text: "Draw the rear spoiler wing!",
                voice: "The big wing at the back pushes the car down so it doesn't fly away! Draw tall posts and a wide flat wing on top — zoom zoom!",
                draw(ctx, t) {
                    // Left spoiler post
                    ctx.beginPath();
                    ctx.moveTo(385, 255);
                    ctx.lineTo(385, 255 - 50 * t);
                    ctx.stroke();
                    // Right spoiler post
                    ctx.beginPath();
                    ctx.moveTo(415, 255);
                    ctx.lineTo(415, 255 - 50 * t);
                    ctx.stroke();
                    // Wing blade — main flat surface
                    ctx.beginPath();
                    ctx.moveTo(370, 255 - 50 * t);
                    ctx.lineTo(370 + 65 * t, 255 - 50 * t);
                    ctx.lineTo(370 + 65 * t, 255 - 50 * t + 8 * t);
                    ctx.lineTo(370, 255 - 50 * t + 8 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // Lower wing element
                    ctx.beginPath();
                    ctx.moveTo(375, 255 - 35 * t);
                    ctx.lineTo(375 + 55 * t, 255 - 35 * t);
                    ctx.stroke();
                    // Exhaust pipes — two pipes at rear
                    ctx.beginPath();
                    ctx.ellipse(342, 263, 5 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(355, 263, 5 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(337, 263);
                    ctx.lineTo(337 + 8 * t, 263);
                    ctx.moveTo(350, 263);
                    ctx.lineTo(350 + 8 * t, 263);
                    ctx.stroke();
                }
            },
            {
                text: "Add the racing number and stripes!",
                voice: "Every race car has a big number so fans can cheer for their favorite! Add the number and some racing stripes — you're number one!",
                draw(ctx, t) {
                    // Racing number on side panel
                    ctx.font = `bold ${36 * t}px Nunito, sans-serif`;
                    ctx.fillText("1", 278, 258);
                    // Racing stripe — single wide stripe along body length
                    ctx.beginPath();
                    ctx.moveTo(90 + 60 * t, 255);
                    ctx.lineTo(90 + 330 * t, 255);
                    ctx.stroke();
                    // Nose stripe
                    ctx.beginPath();
                    ctx.moveTo(90, 265);
                    ctx.bezierCurveTo(
                        90 + 15 * t, 265 - 2 * t,
                        90 + 30 * t, 265 - 15 * t,
                        90 + 55 * t, 265 - 22 * t
                    );
                    ctx.stroke();
                    // Front wing detail
                    ctx.beginPath();
                    ctx.moveTo(70, 265);
                    ctx.lineTo(70 + 60 * t, 265);
                    ctx.lineTo(70 + 60 * t, 265 + 8 * t);
                    ctx.lineTo(70, 265 + 8 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body bright red!", voice: "Race cars are fire-engine red — super fast looking!", color: '#FF4757' },
            { text: "Paint the wheels black!", voice: "Wide black grippy tires for the racetrack!", color: '#2F3542' },
            { text: "Paint the cockpit yellow!", voice: "A bright yellow cockpit so everyone can see the driver!", color: '#ECCC68' },
            { text: "Paint the spoiler white!", voice: "A white rear wing — like wings of speed!", color: '#FFFFFF' },
            { text: "Paint the racing number blue!", voice: "A big blue number one — you're the champion!", color: '#1E90FF' },
            { text: "Paint the nose orange!", voice: "An orange nose to cut through the air — zoom!", color: '#FF7F50' }
        ]
    },
    {
        id: 'helicopter',
        name: 'Helicopter',
        emoji: '\u{1F681}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the egg-shaped fuselage!",
                voice: "Helicopters have a big round egg body called the fuselage! Let's draw that teardrop shape — fat at the front where the pilot sits and narrower at the back.",
                draw(ctx, t) {
                    // Main egg/teardrop fuselage — wider front, tapers to tail
                    ctx.beginPath();
                    ctx.moveTo(355, 215);
                    ctx.bezierCurveTo(
                        355 + 10 * t, 215 - 55 * t,
                        200, 215 - 70 * t,
                        170, 215 - 25 * t
                    );
                    ctx.bezierCurveTo(
                        155, 215 + 5 * t,
                        160, 215 + 45 * t,
                        185, 215 + 50 * t
                    );
                    ctx.bezierCurveTo(
                        230, 215 + 60 * t,
                        310, 215 + 55 * t,
                        355, 215 + 15 * t
                    );
                    ctx.closePath();
                    ctx.stroke();
                    // Fuselage mid-body seam line
                    ctx.beginPath();
                    ctx.moveTo(355, 215);
                    ctx.bezierCurveTo(
                        330, 215 + 5 * t,
                        280, 215 + 8 * t,
                        240, 215 + 8 * t
                    );
                    ctx.stroke();
                }
            },
            {
                text: "Add the tail boom!",
                voice: "The tail boom is the long skinny part that sticks out the back — like a tail! It holds the little spinning rotor that keeps the helicopter from spinning around!",
                draw(ctx, t) {
                    // Tail boom — tapers from body to tail rotor
                    ctx.beginPath();
                    ctx.moveTo(355, 210);
                    ctx.bezierCurveTo(
                        355 + 30 * t, 210 - 10 * t,
                        355 + 70 * t, 210 - 20 * t,
                        355 + 95 * t, 210 - 28 * t
                    );
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(355, 225);
                    ctx.bezierCurveTo(
                        355 + 30 * t, 220,
                        355 + 70 * t, 212,
                        355 + 95 * t, 208
                    );
                    ctx.stroke();
                    // Tail fin — vertical stabilizer
                    ctx.beginPath();
                    ctx.moveTo(355 + 93 * t, 210 - 27 * t);
                    ctx.lineTo(355 + 93 * t, 210 - 27 * t - 38 * t);
                    ctx.bezierCurveTo(
                        355 + 93 * t + 15 * t, 210 - 27 * t - 38 * t,
                        355 + 93 * t + 18 * t, 210 - 27 * t - 15 * t,
                        355 + 93 * t, 210 - 25 * t
                    );
                    ctx.stroke();
                    // Horizontal stabilizer
                    ctx.beginPath();
                    ctx.moveTo(355 + 85 * t, 210 - 26 * t);
                    ctx.lineTo(355 + 85 * t, 210 - 26 * t - 22 * t);
                    ctx.lineTo(355 + 85 * t - 25 * t, 210 - 26 * t - 18 * t);
                    ctx.stroke();
                    // Tail rotor — small blades
                    ctx.beginPath();
                    ctx.arc(355 + 93 * t, 210 - 25 * t, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(355 + 93 * t, 210 - 25 * t - 15 * t);
                    ctx.lineTo(355 + 93 * t, 210 - 25 * t + 15 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(355 + 93 * t - 15 * t, 210 - 25 * t);
                    ctx.lineTo(355 + 93 * t + 15 * t, 210 - 25 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big curved windshield!",
                voice: "The cockpit window is huge and curved like a bubble so the pilot can see everywhere — up, down, and all around! Let's draw that big glass bubble.",
                draw(ctx, t) {
                    // Large bubble windshield — left/front cockpit
                    ctx.beginPath();
                    ctx.moveTo(175, 215 - 18 * t);
                    ctx.bezierCurveTo(
                        165, 215 - 35 * t,
                        175, 215 - 58 * t,
                        210, 215 - 68 * t
                    );
                    ctx.bezierCurveTo(
                        245, 215 - 72 * t,
                        285, 215 - 65 * t,
                        295, 215 - 40 * t
                    );
                    ctx.lineTo(295, 215 - 18 * t);
                    ctx.bezierCurveTo(
                        270, 215 - 5 * t,
                        210, 215 - 3 * t,
                        175, 215 - 18 * t
                    );
                    ctx.closePath();
                    ctx.stroke();
                    // Cockpit frame divider — center post
                    ctx.beginPath();
                    ctx.moveTo(235, 215 - 68 * t);
                    ctx.lineTo(235, 215 - 5 * t);
                    ctx.stroke();
                    // Cockpit frame divider — horizontal bar
                    ctx.beginPath();
                    ctx.moveTo(175, 215 - 35 * t);
                    ctx.lineTo(295, 215 - 35 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the main rotor on top!",
                voice: "The big spinning blades on top are what make the helicopter fly! Chop chop chop! Draw a tall mast and two long wide blades spinning around.",
                draw(ctx, t) {
                    // Rotor mast
                    ctx.beginPath();
                    ctx.moveTo(255, 215 - 68 * t);
                    ctx.lineTo(255, 215 - 68 * t - 25 * t);
                    ctx.stroke();
                    // Rotor hub
                    ctx.beginPath();
                    ctx.arc(255, 215 - 93 * t, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Main blade 1 — sweeps left
                    ctx.beginPath();
                    ctx.moveTo(255 - 8 * t, 215 - 93 * t);
                    ctx.bezierCurveTo(
                        255 - 50 * t, 215 - 93 * t - 10 * t,
                        255 - 120 * t, 215 - 93 * t - 8 * t,
                        255 - 145 * t, 215 - 93 * t - 3 * t
                    );
                    ctx.bezierCurveTo(
                        255 - 120 * t, 215 - 93 * t + 8 * t,
                        255 - 50 * t, 215 - 93 * t + 6 * t,
                        255 - 8 * t, 215 - 93 * t + 3 * t
                    );
                    ctx.closePath();
                    ctx.stroke();
                    // Main blade 2 — sweeps right
                    ctx.beginPath();
                    ctx.moveTo(255 + 8 * t, 215 - 93 * t - 3 * t);
                    ctx.bezierCurveTo(
                        255 + 50 * t, 215 - 93 * t - 6 * t,
                        255 + 120 * t, 215 - 93 * t - 8 * t,
                        255 + 145 * t, 215 - 93 * t - 3 * t
                    );
                    ctx.bezierCurveTo(
                        255 + 120 * t, 215 - 93 * t + 8 * t,
                        255 + 50 * t, 215 - 93 * t + 10 * t,
                        255 + 8 * t, 215 - 93 * t
                    );
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the landing skids!",
                voice: "When the helicopter lands it rests on two long metal rails called skids — like sleigh runners! Let's draw two parallel rails with struts holding them up.",
                draw(ctx, t) {
                    // Left front strut
                    ctx.beginPath();
                    ctx.moveTo(205, 215 + 48 * t);
                    ctx.lineTo(195, 215 + 48 * t + 35 * t);
                    ctx.stroke();
                    // Left rear strut
                    ctx.beginPath();
                    ctx.moveTo(290, 215 + 50 * t);
                    ctx.lineTo(300, 215 + 48 * t + 35 * t);
                    ctx.stroke();
                    // Left skid rail
                    ctx.beginPath();
                    ctx.moveTo(175, 215 + 83 * t);
                    ctx.bezierCurveTo(
                        182, 215 + 90 * t,
                        308, 215 + 90 * t,
                        320, 215 + 83 * t
                    );
                    ctx.stroke();
                    // Right front strut (slightly different position for right side view)
                    ctx.beginPath();
                    ctx.moveTo(215, 215 + 52 * t);
                    ctx.lineTo(205, 215 + 52 * t + 28 * t);
                    ctx.stroke();
                    // Right rear strut
                    ctx.beginPath();
                    ctx.moveTo(300, 215 + 54 * t);
                    ctx.lineTo(310, 215 + 52 * t + 28 * t);
                    ctx.stroke();
                    // Right skid rail (slightly offset to show 3D)
                    ctx.beginPath();
                    ctx.moveTo(185, 215 + 80 * t);
                    ctx.bezierCurveTo(
                        192, 215 + 87 * t,
                        318, 215 + 87 * t,
                        330, 215 + 80 * t
                    );
                    ctx.stroke();
                    // Side door window on fuselage
                    ctx.beginPath();
                    roundRect(ctx, 310, 215 - 15 * t, 35 * t, 30 * t, 5);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the fuselage bright red!", voice: "Rescue helicopters are bright red so everyone can see them coming!", color: '#FF4757' },
            { text: "Paint the tail boom yellow!", voice: "A bright yellow tail boom sticking out the back!", color: '#ECCC68' },
            { text: "Paint the windshield blue!", voice: "A big blue bubble windshield for the pilot!", color: '#70A1FF' },
            { text: "Paint the rotor blades dark!", voice: "Dark spinning blades — chop chop chop!", color: '#2F3542' },
            { text: "Paint the skids silver!", voice: "Silver metal landing skids to touch down gently!", color: '#ECCC68' },
            { text: "Paint the tail rotor orange!", voice: "A bright orange tail rotor spinning round and round!", color: '#FF7F50' }
        ]
    },
    {
        id: 'pirateship',
        name: 'Pirate Ship',
        emoji: '\u{1F3F4}\u{200D}\u{2620}\u{FE0F}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the curved ship hull!",
                voice: "Ahoy matey! Let's draw a pirate ship! The hull is the big curved boat part — it's pointy at the front called the bow, and higher up at the back called the stern!",
                draw(ctx, t) {
                    // Hull — curved bottom, raised bow and stern
                    ctx.beginPath();
                    ctx.moveTo(95, 255);                           // stern top
                    ctx.lineTo(95 - 5 * t, 255 + 20 * t);         // stern step
                    ctx.bezierCurveTo(
                        95, 255 + 65 * t,
                        300, 255 + 85 * t,
                        415, 255 + 55 * t                          // bow bottom
                    );
                    ctx.lineTo(415 + 15 * t, 255 + 30 * t);       // bow tip
                    ctx.lineTo(415 + 15 * t, 255 + 5 * t);        // bow rail
                    ctx.bezierCurveTo(
                        400, 255 - 5 * t,
                        300, 255 + 20 * t,
                        95, 255                                    // back to stern top
                    );
                    ctx.closePath();
                    ctx.stroke();
                    // Raised stern castle
                    ctx.beginPath();
                    ctx.moveTo(95, 255);
                    ctx.lineTo(95, 255 - 50 * t);
                    ctx.lineTo(95 + 80 * t, 255 - 50 * t);
                    ctx.lineTo(95 + 80 * t, 255);
                    ctx.stroke();
                    // Stern castle battlements
                    for (let i = 0; i < 4; i++) {
                        ctx.beginPath();
                        ctx.rect(95 + i * 20 * t, 255 - 50 * t - 10 * t, 12 * t, 10 * t);
                        ctx.stroke();
                    }
                    // Hull planking lines
                    for (let i = 1; i < 4; i++) {
                        ctx.beginPath();
                        ctx.moveTo(95, 255 + i * 16 * t);
                        ctx.bezierCurveTo(
                            200, 255 + i * 18 * t,
                            330, 255 + i * 15 * t,
                            415, 255 + i * 10 * t
                        );
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Raise the tall center mast!",
                voice: "Every pirate ship has a huge tall mast reaching way up into the sky! It holds the sail that catches the wind. Draw it nice and tall — arrr!",
                draw(ctx, t) {
                    // Main center mast — tall vertical pole
                    ctx.beginPath();
                    ctx.moveTo(265, 255);
                    ctx.lineTo(265, 255 - 195 * t);
                    ctx.stroke();
                    // Crow's nest — barrel platform near top
                    ctx.beginPath();
                    roundRect(ctx, 255, 255 - 195 * t + 25 * t, 20 * t, 18 * t, 3);
                    ctx.stroke();
                    // Crow's nest rim
                    ctx.beginPath();
                    ctx.moveTo(252, 255 - 195 * t + 25 * t);
                    ctx.lineTo(252 + 26 * t, 255 - 195 * t + 25 * t);
                    ctx.stroke();
                    // Horizontal yard arm (top spar)
                    ctx.beginPath();
                    ctx.moveTo(265 - 90 * t, 255 - 175 * t);
                    ctx.lineTo(265 + 90 * t, 255 - 175 * t);
                    ctx.stroke();
                    // Lower yard arm (mid spar)
                    ctx.beginPath();
                    ctx.moveTo(265 - 70 * t, 255 - 120 * t);
                    ctx.lineTo(265 + 70 * t, 255 - 120 * t);
                    ctx.stroke();
                    // Second smaller foremast
                    ctx.beginPath();
                    ctx.moveTo(360, 255 - 10 * t);
                    ctx.lineTo(360, 255 - 130 * t);
                    ctx.stroke();
                    // Foremast spar
                    ctx.beginPath();
                    ctx.moveTo(360 - 40 * t, 255 - 110 * t);
                    ctx.lineTo(360 + 40 * t, 255 - 110 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big billowing sail!",
                voice: "The wind fills the sail and pushes the ship across the ocean! Draw a huge billowing sail that puffs out like it's full of wind. Whoooosh!",
                draw(ctx, t) {
                    // Main large sail — billows outward
                    ctx.beginPath();
                    ctx.moveTo(265 - 90 * t, 255 - 175 * t);        // top-left corner
                    ctx.bezierCurveTo(
                        265 - 110 * t, 255 - 155 * t,
                        265 - 115 * t, 255 - 90 * t,
                        265 - 70 * t, 255 - 120 * t                  // bottom-left
                    );
                    ctx.lineTo(265 + 70 * t, 255 - 120 * t);         // bottom-right
                    ctx.bezierCurveTo(
                        265 + 115 * t, 255 - 90 * t,
                        265 + 110 * t, 255 - 155 * t,
                        265 + 90 * t, 255 - 175 * t                  // top-right
                    );
                    ctx.closePath();
                    ctx.stroke();
                    // Sail horizontal rope lines
                    for (let i = 1; i < 4; i++) {
                        const frac = i / 4;
                        const yTop = 255 - 175 * t;
                        const yBot = 255 - 120 * t;
                        const y = yTop + (yBot - yTop) * frac;
                        const buldge = 25 * t * Math.sin(frac * Math.PI);
                        ctx.beginPath();
                        ctx.moveTo(265 - (90 - 20 * frac) * t, y);
                        ctx.bezierCurveTo(
                            265 - buldge, y,
                            265 + buldge, y,
                            265 + (90 - 20 * frac) * t, y
                        );
                        ctx.stroke();
                    }
                    // Smaller foremast sail
                    ctx.beginPath();
                    ctx.moveTo(360 - 40 * t, 255 - 110 * t);
                    ctx.bezierCurveTo(
                        360 - 55 * t, 255 - 80 * t,
                        360 - 50 * t, 255 - 50 * t,
                        360 - 30 * t, 255 - 30 * t
                    );
                    ctx.lineTo(360 + 30 * t, 255 - 30 * t);
                    ctx.bezierCurveTo(
                        360 + 50 * t, 255 - 50 * t,
                        360 + 55 * t, 255 - 80 * t,
                        360 + 40 * t, 255 - 110 * t
                    );
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Hoist the Jolly Roger flag!",
                voice: "Every pirate ship needs the Jolly Roger flag — the skull and crossbones! Fly it at the very top of the mast so everyone knows pirates are coming! Arrr!",
                draw(ctx, t) {
                    // Flag staff at very top
                    ctx.beginPath();
                    ctx.moveTo(265, 255 - 195 * t);
                    ctx.lineTo(265, 255 - 195 * t - 12 * t);
                    ctx.stroke();
                    // Flag body — black rectangle
                    ctx.beginPath();
                    ctx.moveTo(265, 255 - 195 * t - 12 * t);
                    ctx.lineTo(265 + 48 * t, 255 - 195 * t - 12 * t);
                    ctx.lineTo(265 + 48 * t, 255 - 195 * t - 12 * t + 30 * t);
                    ctx.lineTo(265, 255 - 195 * t - 12 * t + 30 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // Skull circle
                    const fx = 265 + 24 * t;
                    const fy = 255 - 195 * t - 12 * t + 12 * t;
                    ctx.beginPath();
                    ctx.arc(fx, fy, 7 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Crossbones — two diagonal lines
                    ctx.beginPath();
                    ctx.moveTo(fx - 8 * t, fy + 8 * t);
                    ctx.lineTo(fx + 8 * t, fy + 18 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(fx + 8 * t, fy + 8 * t);
                    ctx.lineTo(fx - 8 * t, fy + 18 * t);
                    ctx.stroke();
                    // Eye dots on skull
                    ctx.beginPath();
                    ctx.arc(fx - 2 * t, fy - 1 * t, 2 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(fx + 2 * t, fy - 1 * t, 2 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add portholes and the anchor!",
                voice: "Pirate ships have round windows called portholes — and cannon balls could come flying out! Add the anchor too — it goes deep into the sea to keep the ship still!",
                draw(ctx, t) {
                    // Portholes along hull
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.arc(140 + i * 55, 263, 9 * t, 0, Math.PI * 2);
                        ctx.stroke();
                        // Porthole rim
                        ctx.beginPath();
                        ctx.arc(140 + i * 55, 263, 5 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                    // Anchor — hung from bow
                    const ax = 415 + 5 * t;
                    const ay = 255 + 10 * t;
                    // Anchor ring at top
                    ctx.beginPath();
                    ctx.arc(ax, ay - 12 * t, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Anchor shaft
                    ctx.beginPath();
                    ctx.moveTo(ax, ay - 6 * t);
                    ctx.lineTo(ax, ay + 20 * t);
                    ctx.stroke();
                    // Anchor crossbar
                    ctx.beginPath();
                    ctx.moveTo(ax - 10 * t, ay + 2 * t);
                    ctx.lineTo(ax + 10 * t, ay + 2 * t);
                    ctx.stroke();
                    // Anchor flukes (hooks)
                    ctx.beginPath();
                    ctx.moveTo(ax, ay + 20 * t);
                    ctx.bezierCurveTo(ax - 5 * t, ay + 22 * t, ax - 14 * t, ay + 18 * t, ax - 12 * t, ay + 14 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(ax, ay + 20 * t);
                    ctx.bezierCurveTo(ax + 5 * t, ay + 22 * t, ax + 14 * t, ay + 18 * t, ax + 12 * t, ay + 14 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the ocean waves!",
                voice: "Last step — the pirates are sailing on the ocean! Draw big rolling waves under the ship. Can you hear the sea? Yo ho ho and a bottle of juice!",
                draw(ctx, t) {
                    // Three rows of waves below hull
                    for (let row = 0; row < 3; row++) {
                        const baseY = 320 + row * 18;
                        ctx.beginPath();
                        for (let i = 0; i < 7; i++) {
                            const x = 30 + i * 65;
                            const waveH = (14 - row * 3) * t;
                            ctx.moveTo(x, baseY);
                            ctx.bezierCurveTo(
                                x + 15, baseY - waveH,
                                x + 30, baseY - waveH,
                                x + 40, baseY
                            );
                            ctx.bezierCurveTo(
                                x + 50, baseY + waveH * 0.5,
                                x + 58, baseY + waveH * 0.5,
                                x + 65, baseY
                            );
                        }
                        ctx.stroke();
                    }
                    // Wake lines behind the ship
                    ctx.beginPath();
                    ctx.moveTo(95, 295);
                    ctx.bezierCurveTo(60, 305, 40, 310, 30, 308);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(95, 305);
                    ctx.bezierCurveTo(55, 315, 35, 318, 20, 315);
                    ctx.stroke();
                    // Rope from bow
                    ctx.beginPath();
                    ctx.moveTo(430, 260);
                    ctx.bezierCurveTo(435, 270, 438, 280, 435, 285);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the hull dark brown!", voice: "Old wooden pirate ships are dark brown — like old timber!", color: '#8B4513' },
            { text: "Paint the sail cream white!", voice: "Old sails are creamy white — bleached by the sun and sea!", color: '#ECCC68' },
            { text: "Paint the flag black!", voice: "The Jolly Roger is jet black — pirates are coming!", color: '#2F3542' },
            { text: "Paint the mast brown!", voice: "The tall wooden mast is brown like a tree!", color: '#FF7F50' },
            { text: "Paint the waves blue!", voice: "Deep blue ocean waves for the pirates to sail on!", color: '#1E90FF' },
            { text: "Paint the portholes gold!", voice: "Golden portholes — maybe there is treasure inside!", color: '#FFA502' }
        ]
    }
];

function roundRect(ctx, x, y, w, h, r) {
    if (ctx.roundRect) {
        ctx.roundRect(x, y, w, h, r);
    } else {
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    }
}
