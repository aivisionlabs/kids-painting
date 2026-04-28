export const fantasy = [
    {
        id: 'dragon',
        name: 'Dragon',
        emoji: '\u{1F432}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the dragon's S-curved body!",
                voice: "Let's draw a mighty dragon! First, draw a long wiggly S-shaped body — it curves up, then back down like a snake!",
                draw(ctx, t) {
                    // Main sinuous S-curve body
                    ctx.beginPath();
                    ctx.moveTo(370, 95);
                    ctx.bezierCurveTo(430, 130, 380, 200, 310, 220);
                    ctx.bezierCurveTo(230, 240, 180, 280, 160, 340);
                    ctx.lineWidth = 28 * t;
                    ctx.stroke();
                    ctx.lineWidth = 7;

                    // Body outline second curve (belly)
                    ctx.beginPath();
                    ctx.moveTo(345, 95);
                    ctx.bezierCurveTo(420, 145, 355, 215, 285, 230);
                    ctx.bezierCurveTo(205, 250, 155, 290, 140, 345);
                    ctx.stroke();

                    // Belly scales — lighter zig-zag lines across middle
                    for (let i = 0; i < 6; i++) {
                        const prog = i / 6;
                        const bx = 355 - prog * 180;
                        const by = 115 + prog * 200;
                        ctx.beginPath();
                        ctx.moveTo(bx - 10, by);
                        ctx.lineTo(bx, by + 8 * t);
                        ctx.lineTo(bx + 10, by);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add the dragon's head with horns and snout!",
                voice: "Now draw the dragon's awesome head with two big horns and a long snout. Dragons look so fierce!",
                draw(ctx, t) {
                    // Head — elongated oval
                    ctx.beginPath();
                    ctx.ellipse(370, 85, 38 * t, 28 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();

                    // Snout extension
                    ctx.beginPath();
                    ctx.moveTo(395, 75);
                    ctx.bezierCurveTo(420, 68, 440 * t, 75, 445, 85);
                    ctx.bezierCurveTo(440, 95, 420, 98, 395, 95);
                    ctx.stroke();

                    // Nostril
                    ctx.beginPath();
                    ctx.ellipse(432, 80, 4 * t, 2.5 * t, 0.4, 0, Math.PI * 2);
                    ctx.fill();

                    // Horn 1 (back horn)
                    ctx.beginPath();
                    ctx.moveTo(358, 62);
                    ctx.bezierCurveTo(348, 45, 340, 30 * t, 348, 20 * t);
                    ctx.bezierCurveTo(355, 28 * t, 358, 40, 365, 60);
                    ctx.stroke();

                    // Horn 2 (front horn, slightly smaller)
                    ctx.beginPath();
                    ctx.moveTo(378, 60);
                    ctx.bezierCurveTo(372, 45, 368, 33 * t, 374, 24 * t);
                    ctx.bezierCurveTo(380, 33 * t, 383, 45, 385, 60);
                    ctx.stroke();

                    // Eye — almond shape
                    ctx.beginPath();
                    ctx.ellipse(362, 78, 9 * t, 6 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(362, 78, 4 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // Open jaw / teeth
                    ctx.beginPath();
                    ctx.moveTo(400, 92);
                    ctx.bezierCurveTo(418, 100, 438, 100, 445, 95);
                    ctx.stroke();
                    // Upper teeth
                    for (let i = 0; i < 4; i++) {
                        const tx = 405 + i * 10;
                        ctx.beginPath();
                        ctx.moveTo(tx, 93);
                        ctx.lineTo(tx + 4, 93 + 8 * t);
                        ctx.lineTo(tx + 8, 93);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Draw the big bat wings!",
                voice: "Dragons have huge bat wings! Draw the big wing frame, then add the stretchy skin between the finger bones. Whoooosh!",
                draw(ctx, t) {
                    // Left large wing (main)
                    // Wing arm bone
                    ctx.beginPath();
                    ctx.moveTo(320, 175);
                    ctx.bezierCurveTo(280, 120, 210, 80 * t, 160, 70);
                    ctx.stroke();

                    // Wing finger bones from arm tip
                    ctx.beginPath();
                    ctx.moveTo(160, 70);
                    ctx.lineTo(120, 40 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(160, 70);
                    ctx.lineTo(155, 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(160, 70);
                    ctx.lineTo(190, 35 * t);
                    ctx.stroke();

                    // Wing membrane — connect finger tips back to body
                    ctx.beginPath();
                    ctx.moveTo(320, 175);
                    ctx.bezierCurveTo(270, 155, 200, 130, 190, 35 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(190, 35 * t);
                    ctx.bezierCurveTo(175, 50, 140, 55, 120, 40 * t);
                    ctx.stroke();

                    // Membrane texture lines
                    ctx.beginPath();
                    ctx.moveTo(280, 130);
                    ctx.bezierCurveTo(260, 110, 200, 100, 155, 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(250, 145);
                    ctx.bezierCurveTo(225, 130, 185, 110, 190, 35 * t);
                    ctx.stroke();

                    // Right smaller wing (behind body)
                    ctx.beginPath();
                    ctx.moveTo(340, 190);
                    ctx.bezierCurveTo(390, 150, 430, 130 * t, 460, 125);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(460, 125);
                    ctx.lineTo(480, 90 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(460, 125);
                    ctx.lineTo(490, 110 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(340, 190);
                    ctx.bezierCurveTo(400, 170, 465, 155, 490, 110 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add four clawed legs!",
                voice: "Now draw four strong legs with sharp claws at the bottom. Stomp stomp!",
                draw(ctx, t) {
                    // Front left leg
                    ctx.beginPath();
                    ctx.moveTo(290, 245);
                    ctx.bezierCurveTo(270, 270, 260, 290, 255, 315 * t);
                    ctx.stroke();
                    // Front left claws
                    ctx.beginPath();
                    ctx.moveTo(255, 315 * t);
                    ctx.lineTo(242, 330 * t);
                    ctx.moveTo(255, 315 * t);
                    ctx.lineTo(252, 334 * t);
                    ctx.moveTo(255, 315 * t);
                    ctx.lineTo(265, 333 * t);
                    ctx.stroke();

                    // Front right leg
                    ctx.beginPath();
                    ctx.moveTo(320, 240);
                    ctx.bezierCurveTo(340, 265, 348, 285, 350, 310 * t);
                    ctx.stroke();
                    // Front right claws
                    ctx.beginPath();
                    ctx.moveTo(350, 310 * t);
                    ctx.lineTo(338, 325 * t);
                    ctx.moveTo(350, 310 * t);
                    ctx.lineTo(350, 328 * t);
                    ctx.moveTo(350, 310 * t);
                    ctx.lineTo(362, 325 * t);
                    ctx.stroke();

                    // Back left leg
                    ctx.beginPath();
                    ctx.moveTo(215, 295);
                    ctx.bezierCurveTo(195, 320, 185, 340, 182, 360 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(182, 360 * t);
                    ctx.lineTo(168, 372 * t);
                    ctx.moveTo(182, 360 * t);
                    ctx.lineTo(180, 375 * t);
                    ctx.moveTo(182, 360 * t);
                    ctx.lineTo(194, 372 * t);
                    ctx.stroke();

                    // Back right leg
                    ctx.beginPath();
                    ctx.moveTo(250, 305);
                    ctx.bezierCurveTo(265, 330, 268, 345, 268, 362 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(268, 362 * t);
                    ctx.lineTo(255, 374 * t);
                    ctx.moveTo(268, 362 * t);
                    ctx.lineTo(268, 377 * t);
                    ctx.moveTo(268, 362 * t);
                    ctx.lineTo(280, 374 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the spiked tail!",
                voice: "Add a long tapering tail with a pointy arrow tip at the end. And draw spikes all down the dragon's back!",
                draw(ctx, t) {
                    // Tapering tail
                    ctx.beginPath();
                    ctx.moveTo(160, 340);
                    ctx.bezierCurveTo(120, 360, 90, 370, 70, 375);
                    ctx.bezierCurveTo(55, 378, 40, 372, 35, 368);
                    ctx.stroke();

                    // Arrow tip of tail
                    ctx.beginPath();
                    ctx.moveTo(35, 368);
                    ctx.lineTo(22, 355 * t);
                    ctx.lineTo(38, 358);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(35, 368);
                    ctx.lineTo(20, 375 * t);
                    ctx.lineTo(36, 372);
                    ctx.stroke();

                    // Spikes along spine
                    const spinePoints = [
                        [370, 60], [350, 90], [330, 140], [310, 190], [275, 225], [240, 255], [205, 280], [175, 315]
                    ];
                    spinePoints.forEach(([sx, sy], i) => {
                        const spikeH = (i < 3 ? 20 : 14) * t;
                        ctx.beginPath();
                        ctx.moveTo(sx - 5, sy);
                        ctx.lineTo(sx, sy - spikeH);
                        ctx.lineTo(sx + 5, sy);
                        ctx.stroke();
                    });
                }
            },
            {
                text: "Add fire breath and scales!",
                voice: "Now the best part — draw fiery flames shooting from the dragon's mouth! And add little scale patterns on the body!",
                draw(ctx, t) {
                    // Fire breath — three flame tongues
                    ctx.beginPath();
                    ctx.moveTo(445, 90);
                    ctx.bezierCurveTo(460, 75, 480, 65 * t, 490, 60);
                    ctx.bezierCurveTo(485, 70, 475, 78, 465, 85);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(445, 93);
                    ctx.bezierCurveTo(468, 88, 488, 82 * t, 498, 78);
                    ctx.bezierCurveTo(492, 88, 478, 92, 460, 95);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(445, 96);
                    ctx.bezierCurveTo(462, 98, 480, 100 * t, 488, 108);
                    ctx.bezierCurveTo(478, 108, 462, 105, 450, 100);
                    ctx.stroke();

                    // Scale rows along body — arc patterns
                    const scalePositions = [
                        [340, 160], [310, 200], [275, 230], [245, 258], [215, 285]
                    ];
                    scalePositions.forEach(([sx, sy]) => {
                        for (let col = -1; col <= 1; col++) {
                            ctx.beginPath();
                            ctx.arc(sx + col * 14, sy, 7 * t, Math.PI, 0);
                            ctx.stroke();
                        }
                    });
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body dark green!", voice: "Fill the whole dragon body with dark green!", color: '#2F3542' },
            { text: "Paint the belly yellow!", voice: "Paint the belly plates golden yellow!", color: '#ECCC68' },
            { text: "Paint the wings purple!", voice: "Color those big wings a spooky purple!", color: '#A855F7' },
            { text: "Paint the fire orange!", voice: "Make the fire blazing orange!", color: '#FFA502' },
            { text: "Paint the claws red!", voice: "Make the sharp claws bright red!", color: '#FF4757' },
            { text: "Paint the eye white!", voice: "Add a fierce white eye!", color: '#FFFFFF' }
        ]
    },
    {
        id: 'trex',
        name: 'T-Rex',
        emoji: '\u{1F996}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the massive body leaning forward!",
                voice: "Let's draw a terrifying T-Rex! Draw a big chunky oval body that tilts forward — T-Rexes always lean like they're chasing something!",
                draw(ctx, t) {
                    // Large muscular body tilted forward
                    ctx.beginPath();
                    ctx.ellipse(240, 245, 90 * t, 75 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();

                    // Muscle texture bumps on body
                    const bumpPositions = [[210, 210], [255, 195], [285, 220], [290, 255], [270, 280]];
                    bumpPositions.forEach(([bx, by]) => {
                        ctx.beginPath();
                        ctx.arc(bx, by, 8 * t, 0, Math.PI);
                        ctx.stroke();
                    });
                }
            },
            {
                text: "Add the giant head and jaw!",
                voice: "The T-Rex has a HUGE head with the biggest jaws in the jungle! Draw a big rectangle head with a massive open jaw. RAWR!",
                draw(ctx, t) {
                    // Upper skull — large boxy head
                    ctx.beginPath();
                    ctx.moveTo(295, 145);
                    ctx.bezierCurveTo(310, 130, 395, 125, 420, 140);
                    ctx.bezierCurveTo(435, 150, 438, 168, 435, 178);
                    ctx.bezierCurveTo(415, 175, 300, 178, 288, 170);
                    ctx.bezierCurveTo(285, 162, 288, 150, 295, 145);
                    ctx.stroke();

                    // Lower jaw — big gaping mouth
                    ctx.beginPath();
                    ctx.moveTo(295, 170);
                    ctx.bezierCurveTo(310, 175, 390, 178, 430, 172);
                    ctx.bezierCurveTo(435, 185, 432, 205, 425, 210);
                    ctx.bezierCurveTo(400, 215, 310, 215, 295, 205);
                    ctx.bezierCurveTo(288, 198, 290, 180, 295, 170);
                    ctx.stroke();

                    // Neck connecting to body
                    ctx.beginPath();
                    ctx.moveTo(295, 155);
                    ctx.bezierCurveTo(275, 185, 265, 205, 260, 180);
                    ctx.bezierCurveTo(270, 165, 285, 145, 295, 155);
                    ctx.stroke();

                    // Beady eye
                    ctx.beginPath();
                    ctx.arc(318, 148, 9 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(318, 148, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Eyebrow ridge — fierce look
                    ctx.beginPath();
                    ctx.moveTo(308, 140);
                    ctx.lineTo(330, 138);
                    ctx.stroke();

                    // Nostril
                    ctx.beginPath();
                    ctx.ellipse(390, 140, 5 * t, 3 * t, -0.3, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw the sharp teeth!",
                voice: "Time for the scariest part — those huge sharp teeth! Draw lots of pointy triangles along the top and bottom jaw!",
                draw(ctx, t) {
                    // Upper teeth
                    for (let i = 0; i < 7; i++) {
                        const tx = 305 + i * 17;
                        ctx.beginPath();
                        ctx.moveTo(tx, 178);
                        ctx.lineTo(tx + 6, 178 + 14 * t);
                        ctx.lineTo(tx + 12, 178);
                        ctx.stroke();
                    }
                    // Lower teeth (shorter, staggered)
                    for (let i = 0; i < 6; i++) {
                        const tx = 312 + i * 17;
                        ctx.beginPath();
                        ctx.moveTo(tx, 195);
                        ctx.lineTo(tx + 5, 195 - 10 * t);
                        ctx.lineTo(tx + 10, 195);
                        ctx.stroke();
                    }
                    // Tongue hint
                    ctx.beginPath();
                    ctx.moveTo(350, 200);
                    ctx.bezierCurveTo(360, 210, 375, 210 * t, 380, 205);
                    ctx.stroke();
                }
            },
            {
                text: "Add the tiny arms with claws!",
                voice: "T-Rexes are famous for their teeny-tiny arms! Draw two itty-bitty arms — they're so small it's funny! Add two little claws.",
                draw(ctx, t) {
                    // Left tiny arm
                    ctx.beginPath();
                    ctx.moveTo(267, 210);
                    ctx.bezierCurveTo(260, 225, 248, 235, 240, 240);
                    ctx.stroke();
                    // Left arm claws (just 2)
                    ctx.beginPath();
                    ctx.moveTo(240, 240);
                    ctx.lineTo(232, 250 * t);
                    ctx.moveTo(240, 240);
                    ctx.lineTo(242, 252 * t);
                    ctx.stroke();

                    // Right tiny arm (barely visible, same side — showing the other arm peeking)
                    ctx.beginPath();
                    ctx.moveTo(278, 205);
                    ctx.bezierCurveTo(290, 218, 295, 228, 294, 235);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(294, 235);
                    ctx.lineTo(286, 244 * t);
                    ctx.moveTo(294, 235);
                    ctx.lineTo(296, 246 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the powerful legs!",
                voice: "T-Rexes have SUPER strong thick legs — they need them to hold up that giant body! Draw two really wide, muscular legs!",
                draw(ctx, t) {
                    // Left thick leg — upper
                    ctx.beginPath();
                    ctx.moveTo(195, 295);
                    ctx.bezierCurveTo(180, 320, 172, 345, 170, 365 * t);
                    ctx.stroke();
                    // Left leg width
                    ctx.beginPath();
                    ctx.moveTo(225, 295);
                    ctx.bezierCurveTo(218, 325, 210, 348, 205, 365 * t);
                    ctx.stroke();
                    // Left foot
                    ctx.beginPath();
                    ctx.moveTo(170, 365 * t);
                    ctx.lineTo(205, 365 * t);
                    ctx.stroke();
                    // Left foot claws
                    ctx.beginPath();
                    ctx.moveTo(170, 365 * t);
                    ctx.lineTo(155, 375 * t);
                    ctx.moveTo(182, 368 * t);
                    ctx.lineTo(175, 380 * t);
                    ctx.moveTo(195, 366 * t);
                    ctx.lineTo(192, 380 * t);
                    ctx.moveTo(205, 365 * t);
                    ctx.lineTo(208, 378 * t);
                    ctx.stroke();

                    // Right thick leg
                    ctx.beginPath();
                    ctx.moveTo(275, 300);
                    ctx.bezierCurveTo(280, 328, 282, 350, 282, 365 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(305, 295);
                    ctx.bezierCurveTo(315, 325, 318, 348, 318, 365 * t);
                    ctx.stroke();
                    // Right foot
                    ctx.beginPath();
                    ctx.moveTo(282, 365 * t);
                    ctx.lineTo(318, 365 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(282, 365 * t);
                    ctx.lineTo(268, 375 * t);
                    ctx.moveTo(292, 368 * t);
                    ctx.lineTo(290, 380 * t);
                    ctx.moveTo(305, 366 * t);
                    ctx.lineTo(306, 380 * t);
                    ctx.moveTo(318, 365 * t);
                    ctx.lineTo(326, 376 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add the thick tail and skin texture!",
                voice: "Draw a long thick tail that sticks out behind for balance. Then add bumpy skin all over — dinosaurs had scaly skin!",
                draw(ctx, t) {
                    // Thick tapering tail
                    ctx.beginPath();
                    ctx.moveTo(165, 255);
                    ctx.bezierCurveTo(120, 265, 80, 258, 50, 248);
                    ctx.bezierCurveTo(30, 242, 20, 235, 18, 230);
                    ctx.stroke();
                    // Lower edge of tail
                    ctx.beginPath();
                    ctx.moveTo(165, 280);
                    ctx.bezierCurveTo(120, 285, 80, 272, 50, 258);
                    ctx.bezierCurveTo(32, 250, 22, 240, 18, 230);
                    ctx.stroke();

                    // Skin texture bumps scattered across body
                    const skinBumps = [
                        [230, 225], [260, 240], [220, 260], [250, 270], [280, 250],
                        [200, 245], [270, 215], [240, 200], [185, 265]
                    ];
                    skinBumps.forEach(([bx, by]) => {
                        ctx.beginPath();
                        ctx.arc(bx, by, 5 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    });
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body green!", voice: "Paint the big body a fierce dark green!", color: '#2ED573' },
            { text: "Paint the belly light!", voice: "The belly is a lighter color — paint it yellow!", color: '#ECCC68' },
            { text: "Paint the teeth white!", voice: "Make those scary teeth bright white!", color: '#FFFFFF' },
            { text: "Paint the eye orange!", voice: "Give it a glowing orange eye!", color: '#FFA502' },
            { text: "Paint the claws red!", voice: "Paint the sharp claws bright red!", color: '#FF4757' },
            { text: "Paint the tongue red!", voice: "Add a red tongue — RAWR!", color: '#FF6B81' }
        ]
    },
    {
        id: 'rocket',
        name: 'Rocket',
        emoji: '\u{1F680}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the rocket body and nose cone!",
                voice: "Blast off! Let's draw a rocket! Draw a tall rectangle for the body, then a pointed triangle on top for the nose cone!",
                draw(ctx, t) {
                    // Cylindrical body
                    ctx.beginPath();
                    ctx.rect(205, 155, 90 * t, 165);
                    ctx.stroke();

                    // Pointed nose cone
                    ctx.beginPath();
                    ctx.moveTo(205, 155);
                    ctx.lineTo(250, 155 - 90 * t);
                    ctx.lineTo(295, 155);
                    ctx.closePath();
                    ctx.stroke();

                    // Nose cone center seam
                    ctx.beginPath();
                    ctx.moveTo(250, 155);
                    ctx.lineTo(250, 155 - 90 * t);
                    ctx.stroke();

                    // Panel lines on body (horizontal seams)
                    ctx.beginPath();
                    ctx.moveTo(205, 210);
                    ctx.lineTo(295, 210);
                    ctx.moveTo(205, 255);
                    ctx.lineTo(295, 255);
                    ctx.stroke();

                    // Vertical center seam on body
                    ctx.beginPath();
                    ctx.moveTo(250, 155);
                    ctx.lineTo(250, 320);
                    ctx.stroke();
                }
            },
            {
                text: "Draw three triangular fins!",
                voice: "Now draw three big triangular fins at the bottom of the rocket. They help it fly straight!",
                draw(ctx, t) {
                    // Left fin
                    ctx.beginPath();
                    ctx.moveTo(205, 255);
                    ctx.lineTo(205 - 55 * t, 320 + 5 * t);
                    ctx.lineTo(205, 320);
                    ctx.closePath();
                    ctx.stroke();

                    // Right fin
                    ctx.beginPath();
                    ctx.moveTo(295, 255);
                    ctx.lineTo(295 + 55 * t, 320 + 5 * t);
                    ctx.lineTo(295, 320);
                    ctx.closePath();
                    ctx.stroke();

                    // Bottom center fin (small, front-facing)
                    ctx.beginPath();
                    ctx.moveTo(232, 315);
                    ctx.lineTo(250, 315 + 30 * t);
                    ctx.lineTo(268, 315);
                    ctx.closePath();
                    ctx.stroke();

                    // Exhaust nozzle at bottom
                    ctx.beginPath();
                    ctx.moveTo(220, 320);
                    ctx.lineTo(215, 335);
                    ctx.lineTo(285, 335);
                    ctx.lineTo(280, 320);
                    ctx.stroke();
                    // Nozzle bell curve
                    ctx.beginPath();
                    ctx.moveTo(215, 335);
                    ctx.bezierCurveTo(220, 342, 280, 342, 285, 335);
                    ctx.stroke();
                }
            },
            {
                text: "Add the porthole window!",
                voice: "Every rocket has a window for the astronaut to look out! Draw a big round porthole in the middle of the body!",
                draw(ctx, t) {
                    // Outer window frame
                    ctx.beginPath();
                    ctx.arc(250, 195, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Inner window pane
                    ctx.beginPath();
                    ctx.arc(250, 195, 20 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Window cross detail
                    ctx.beginPath();
                    ctx.moveTo(250, 175 * t + 195 * (1 - t));
                    ctx.lineTo(250, 215 * t + 195 * (1 - t));
                    ctx.moveTo(230 * t + 250 * (1 - t), 195);
                    ctx.lineTo(270 * t + 250 * (1 - t), 195);
                    ctx.stroke();

                    // Window shine/reflection arc
                    ctx.beginPath();
                    ctx.arc(240, 185, 8 * t, Math.PI * 1.2, Math.PI * 1.7);
                    ctx.stroke();
                }
            },
            {
                text: "Add flag and panel details!",
                voice: "Let's add some cool details — a flag sticker and some buttons and dials on the rocket body!",
                draw(ctx, t) {
                    // Flag outline on upper panel
                    ctx.beginPath();
                    ctx.rect(212, 162, 30 * t, 18 * t);
                    ctx.stroke();
                    // Flag stripes (simplified)
                    ctx.beginPath();
                    ctx.moveTo(212, 168 * t + 162 * (1 - t));
                    ctx.lineTo(242 * t + 212 * (1 - t), 168 * t + 162 * (1-t));
                    ctx.moveTo(212, 174 * t + 162 * (1 - t));
                    ctx.lineTo(242 * t + 212 * (1 - t), 174 * t + 162 * (1-t));
                    ctx.stroke();

                    // Control panel in lower section — small rectangle
                    ctx.beginPath();
                    ctx.rect(218, 262, 64 * t, 40 * t);
                    ctx.stroke();

                    // Buttons on panel
                    ctx.beginPath();
                    ctx.arc(232, 275, 5 * t, 0, Math.PI * 2);
                    ctx.arc(250, 275, 5 * t, 0, Math.PI * 2);
                    ctx.arc(268, 275, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Dial
                    ctx.beginPath();
                    ctx.arc(240, 290, 7 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(240, 290);
                    ctx.lineTo(240 + 5 * t, 290 - 4 * t);
                    ctx.stroke();

                    // Small screen
                    ctx.beginPath();
                    ctx.rect(256, 284, 18 * t, 12 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the rocket exhaust plume!",
                voice: "Now the most exciting part! Draw huge flames shooting out of the bottom. Three, two, one — BLAST OFF!",
                draw(ctx, t) {
                    // Outer flame shape (wide)
                    ctx.beginPath();
                    ctx.moveTo(220, 342);
                    ctx.bezierCurveTo(210, 358, 195, 370, 205, 390 * t);
                    ctx.bezierCurveTo(218, 375, 228, 360, 235, 342);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(280, 342);
                    ctx.bezierCurveTo(290, 358, 305, 370, 295, 390 * t);
                    ctx.bezierCurveTo(282, 375, 272, 360, 265, 342);
                    ctx.stroke();

                    // Middle tall flame
                    ctx.beginPath();
                    ctx.moveTo(235, 342);
                    ctx.bezierCurveTo(238, 360, 242, 375, 250, 395 * t);
                    ctx.bezierCurveTo(258, 375, 262, 360, 265, 342);
                    ctx.stroke();

                    // Inner hot core flames (smaller, central)
                    ctx.beginPath();
                    ctx.moveTo(240, 342);
                    ctx.bezierCurveTo(242, 355, 246, 368, 250, 380 * t);
                    ctx.bezierCurveTo(254, 368, 258, 355, 260, 342);
                    ctx.stroke();

                    // Flame wisp left
                    ctx.beginPath();
                    ctx.moveTo(215, 342);
                    ctx.bezierCurveTo(200, 355, 190, 360, 185, 370 * t);
                    ctx.stroke();

                    // Flame wisp right
                    ctx.beginPath();
                    ctx.moveTo(285, 342);
                    ctx.bezierCurveTo(300, 355, 310, 360, 315, 370 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body white!", voice: "Paint the rocket body bright white!", color: '#FFFFFF' },
            { text: "Paint the nose cone red!", voice: "The nose cone is bright red — like a superhero cape!", color: '#FF4757' },
            { text: "Paint the fins blue!", voice: "Paint those three fins a bold blue!", color: '#1E90FF' },
            { text: "Paint the window blue!", voice: "Make the porthole window a deep space blue!", color: '#70A1FF' },
            { text: "Paint the flames orange!", voice: "The fire is blazing orange — we're going to space!", color: '#FFA502' },
            { text: "Paint the inner flame yellow!", voice: "The very hottest part of the flame is yellow!", color: '#ECCC68' }
        ]
    },
    {
        id: 'unicorn',
        name: 'Unicorn',
        emoji: '\u{1F984}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the elegant body!",
                voice: "Let's draw a magical unicorn! Start with a big oval for the body, nice and round. Unicorns are beautiful horses with magic powers!",
                draw(ctx, t) {
                    // Main body — large oval
                    ctx.beginPath();
                    ctx.ellipse(235, 265, 100 * t, 65 * t, -0.1, 0, Math.PI * 2);
                    ctx.stroke();

                    // Chest rounding
                    ctx.beginPath();
                    ctx.bezierCurveTo(300, 220, 330, 230, 335, 255);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the arched neck and head!",
                voice: "Now draw the graceful neck curving up, and then a beautiful oval head at the top. Unicorns hold their heads up high!",
                draw(ctx, t) {
                    // Arched neck
                    ctx.beginPath();
                    ctx.moveTo(310, 215);
                    ctx.bezierCurveTo(330, 185, 335, 155, 330, 135);
                    ctx.stroke();
                    // Other side of neck
                    ctx.beginPath();
                    ctx.moveTo(330, 215);
                    ctx.bezierCurveTo(355, 185, 358, 155, 352, 138);
                    ctx.stroke();

                    // Head — refined oval
                    ctx.beginPath();
                    ctx.ellipse(340, 118, 30 * t, 25 * t, 0.15, 0, Math.PI * 2);
                    ctx.stroke();

                    // Snout / muzzle
                    ctx.beginPath();
                    ctx.ellipse(360, 128, 14 * t, 10 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();

                    // Nostril
                    ctx.beginPath();
                    ctx.arc(366, 132, 3 * t, 0, Math.PI * 2);
                    ctx.fill();

                    // Pointed ear
                    ctx.beginPath();
                    ctx.moveTo(322, 100);
                    ctx.lineTo(315, 80 * t + 100 * (1 - t));
                    ctx.lineTo(332, 98);
                    ctx.stroke();
                    // Inner ear
                    ctx.beginPath();
                    ctx.moveTo(324, 99);
                    ctx.lineTo(320, 84 * t + 99 * (1 - t));
                    ctx.lineTo(330, 98);
                    ctx.stroke();

                    // Almond eye with lash
                    ctx.beginPath();
                    ctx.ellipse(336, 112, 8 * t, 6 * t, 0.1, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(336, 112, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Lashes
                    ctx.beginPath();
                    ctx.moveTo(330, 107);
                    ctx.lineTo(327, 102 * t + 107 * (1 - t));
                    ctx.moveTo(335, 106);
                    ctx.lineTo(333, 101 * t + 106 * (1 - t));
                    ctx.moveTo(340, 107);
                    ctx.lineTo(339, 102 * t + 107 * (1 - t));
                    ctx.stroke();
                }
            },
            {
                text: "Draw the spiral magical horn!",
                voice: "Now the most magical part — the unicorn's spiral horn! Draw a tall pointy triangle, then add twisting lines around it. It glows with rainbow magic!",
                draw(ctx, t) {
                    // Horn triangle
                    ctx.beginPath();
                    ctx.moveTo(330, 97);
                    ctx.lineTo(320, 97 - 65 * t);
                    ctx.lineTo(340, 97);
                    ctx.closePath();
                    ctx.stroke();

                    // Spiral lines around horn
                    const hornTop = 97 - 65 * t;
                    const hornH = 65 * t;
                    for (let i = 1; i <= 5; i++) {
                        const hy = hornTop + hornH * (i / 6);
                        const hw = (i / 6) * 10;
                        ctx.beginPath();
                        ctx.moveTo(330 - hw, hy);
                        ctx.lineTo(330 + hw, hy + 6);
                        ctx.stroke();
                    }

                    // Sparkle stars around horn tip
                    const starX = 320, starY = 97 - 65 * t;
                    ctx.beginPath();
                    ctx.moveTo(starX - 15 * t, starY);
                    ctx.lineTo(starX - 5 * t, starY);
                    ctx.moveTo(starX - 12 * t, starY - 8 * t);
                    ctx.lineTo(starX - 6 * t, starY - 3 * t);
                    ctx.moveTo(starX - 12 * t, starY + 8 * t);
                    ctx.lineTo(starX - 6 * t, starY + 3 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the flowing mane!",
                voice: "Unicorns have the most beautiful flowing manes! Draw lots of wavy lines going down the neck — make them swirl and wave like magic!",
                draw(ctx, t) {
                    // Multiple flowing mane waves
                    ctx.beginPath();
                    ctx.moveTo(320, 100);
                    ctx.bezierCurveTo(300, 120, 292, 145, 298, 175);
                    ctx.bezierCurveTo(302, 195, 308, 210, 300, 230);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(316, 102);
                    ctx.bezierCurveTo(295, 125, 285, 150, 292, 180);
                    ctx.bezierCurveTo(296, 200, 302, 215, 294, 235);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(313, 106);
                    ctx.bezierCurveTo(290, 132, 278, 158, 286, 188);
                    ctx.bezierCurveTo(292, 208, 296, 222, 288, 240);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(310, 112);
                    ctx.bezierCurveTo(286, 140, 274, 165, 282, 195);
                    ctx.bezierCurveTo(288, 215, 291, 228, 282, 244);
                    ctx.stroke();

                    // Forelock (hair falling over forehead)
                    ctx.beginPath();
                    ctx.moveTo(325, 98);
                    ctx.bezierCurveTo(318, 108, 315, 118, 320, 125);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(328, 97);
                    ctx.bezierCurveTo(322, 110, 320, 122, 328, 130);
                    ctx.stroke();
                }
            },
            {
                text: "Draw four slender legs with hooves!",
                voice: "Unicorns have long elegant legs! Draw four slender legs coming down from the body, with little rounded hooves at the bottom!",
                draw(ctx, t) {
                    // Front left leg
                    ctx.beginPath();
                    ctx.moveTo(285, 318);
                    ctx.bezierCurveTo(280, 340, 278, 358, 277, 375 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(295, 318);
                    ctx.bezierCurveTo(292, 340, 290, 358, 290, 375 * t);
                    ctx.stroke();
                    // Front left hoof
                    ctx.beginPath();
                    ctx.ellipse(283, 375 * t, 8 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Front right leg
                    ctx.beginPath();
                    ctx.moveTo(315, 318);
                    ctx.bezierCurveTo(312, 340, 310, 358, 309, 375 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(325, 316);
                    ctx.bezierCurveTo(324, 338, 323, 356, 322, 373 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(315, 374 * t, 8 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Back left leg
                    ctx.beginPath();
                    ctx.moveTo(155, 308);
                    ctx.bezierCurveTo(152, 330, 150, 350, 149, 372 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(168, 312);
                    ctx.bezierCurveTo(166, 335, 164, 355, 163, 374 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(156, 373 * t, 8 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Back right leg
                    ctx.beginPath();
                    ctx.moveTo(185, 312);
                    ctx.bezierCurveTo(184, 335, 183, 355, 182, 374 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(198, 314);
                    ctx.bezierCurveTo(198, 337, 197, 357, 196, 375 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(189, 375 * t, 8 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the flowing tail and sparkle magic!",
                voice: "The final touch — a beautiful flowing tail and magical sparkles everywhere! Unicorns leave a trail of rainbow sparkles wherever they go!",
                draw(ctx, t) {
                    // Flowing tail — multiple wavy strands
                    ctx.beginPath();
                    ctx.moveTo(142, 260);
                    ctx.bezierCurveTo(115, 275, 95, 295, 100, 330 * t);
                    ctx.bezierCurveTo(105, 355, 120, 365, 115, 385 * t);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(140, 264);
                    ctx.bezierCurveTo(110, 280, 88, 305, 95, 340 * t);
                    ctx.bezierCurveTo(100, 365, 118, 375, 112, 390 * t);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(138, 268);
                    ctx.bezierCurveTo(105, 288, 82, 315, 90, 348 * t);
                    ctx.bezierCurveTo(96, 370, 115, 380, 108, 392 * t);
                    ctx.stroke();

                    // Sparkle stars scattered around
                    const sparkles = [[390, 80], [400, 150], [380, 200], [110, 150], [95, 220]];
                    sparkles.forEach(([sx, sy]) => {
                        ctx.beginPath();
                        ctx.moveTo(sx, sy - 10 * t);
                        ctx.lineTo(sx, sy + 10 * t);
                        ctx.moveTo(sx - 10 * t, sy);
                        ctx.lineTo(sx + 10 * t, sy);
                        ctx.moveTo(sx - 7 * t, sy - 7 * t);
                        ctx.lineTo(sx + 7 * t, sy + 7 * t);
                        ctx.moveTo(sx + 7 * t, sy - 7 * t);
                        ctx.lineTo(sx - 7 * t, sy + 7 * t);
                        ctx.stroke();
                    });
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body white!", voice: "Paint the unicorn's body beautiful white!", color: '#FFFFFF' },
            { text: "Paint the mane pink!", voice: "The flowing mane is a magical pink!", color: '#FF6B81' },
            { text: "Paint the horn gold!", voice: "The magical horn shines golden!", color: '#ECCC68' },
            { text: "Paint the tail purple!", voice: "The tail swishes in rainbow purple!", color: '#D580FF' },
            { text: "Paint the hooves brown!", voice: "Give the hooves a rich brown color!", color: '#8B4513' },
            { text: "Paint the sparkles yellow!", voice: "Make the sparkles shine bright yellow!", color: '#ECCC68' }
        ]
    },
    {
        id: 'robot',
        name: 'Robot',
        emoji: '\u{1F916}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the boxy head with antenna!",
                voice: "Beep boop! Let's build a robot! Draw a big square for the head, then a long antenna on top with a little ball at the end. It picks up signals from outer space!",
                draw(ctx, t) {
                    // Head box — slightly rounded corners look
                    ctx.beginPath();
                    ctx.rect(195, 90, 110 * t, 90 * t);
                    ctx.stroke();

                    // Antenna base on top center
                    ctx.beginPath();
                    ctx.moveTo(250, 90);
                    ctx.lineTo(250, 90 - 40 * t);
                    ctx.stroke();

                    // Antenna ball
                    ctx.beginPath();
                    ctx.arc(250, 90 - 40 * t, 9 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Inner glow of antenna ball
                    ctx.beginPath();
                    ctx.arc(250, 90 - 40 * t, 4 * t, 0, Math.PI * 2);
                    ctx.fill();

                    // Antenna tilt lines (signal waves)
                    ctx.beginPath();
                    ctx.arc(250, 90 - 40 * t, 15 * t, Math.PI * 1.4, Math.PI * 1.8);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 90 - 40 * t, 22 * t, Math.PI * 1.4, Math.PI * 1.8);
                    ctx.stroke();

                    // Rivet bolts at head corners
                    ctx.beginPath();
                    ctx.arc(200, 95, 4 * t, 0, Math.PI * 2);
                    ctx.arc(300, 95, 4 * t, 0, Math.PI * 2);
                    ctx.arc(200, 175, 4 * t, 0, Math.PI * 2);
                    ctx.arc(300, 175, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the visor eyes and speaker mouth!",
                voice: "Now give the robot a face! Draw two rectangle visor eyes that glow, and a speaker-grille mouth with lots of little lines. Beep boop — I am a robot!",
                draw(ctx, t) {
                    // Left eye — rectangular visor
                    ctx.beginPath();
                    ctx.rect(210, 112, 32 * t, 22 * t);
                    ctx.stroke();
                    // Left eye inner glow
                    ctx.beginPath();
                    ctx.rect(215, 117, 22 * t, 12 * t);
                    ctx.fill();

                    // Right eye — rectangular visor
                    ctx.beginPath();
                    ctx.rect(258, 112, 32 * t, 22 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(263, 117, 22 * t, 12 * t);
                    ctx.fill();

                    // Speaker grille mouth — rectangle with lines
                    ctx.beginPath();
                    ctx.rect(215, 148, 70 * t, 22 * t);
                    ctx.stroke();
                    // Grille lines
                    for (let i = 1; i <= 5; i++) {
                        ctx.beginPath();
                        ctx.moveTo(215 + i * (70 * t / 6), 148);
                        ctx.lineTo(215 + i * (70 * t / 6), 170 * t + 148 * (1 - t));
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Draw the rectangular torso with control panel!",
                voice: "Every robot has a big control panel on its chest with buttons and screens! Draw a big rectangle for the body, then add all the controls!",
                draw(ctx, t) {
                    // Main torso box
                    ctx.beginPath();
                    ctx.rect(185, 185, 130 * t, 115 * t);
                    ctx.stroke();

                    // Torso rivets
                    ctx.beginPath();
                    ctx.arc(190, 190, 4 * t, 0, Math.PI * 2);
                    ctx.arc(310, 190, 4 * t, 0, Math.PI * 2);
                    ctx.arc(190, 295, 4 * t, 0, Math.PI * 2);
                    ctx.arc(310, 295, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Control panel screen (upper chest)
                    ctx.beginPath();
                    ctx.rect(205, 198, 90 * t, 40 * t);
                    ctx.stroke();

                    // Screen scan lines
                    ctx.beginPath();
                    ctx.moveTo(205, 208 * t + 198 * (1-t));
                    ctx.lineTo(295 * t + 205 * (1-t), 208 * t + 198 * (1-t));
                    ctx.moveTo(205, 218 * t + 198 * (1-t));
                    ctx.lineTo(295 * t + 205 * (1-t), 218 * t + 198 * (1-t));
                    ctx.moveTo(205, 228 * t + 198 * (1-t));
                    ctx.lineTo(295 * t + 205 * (1-t), 228 * t + 198 * (1-t));
                    ctx.stroke();

                    // Buttons row
                    ctx.beginPath();
                    ctx.arc(215, 258, 8 * t, 0, Math.PI * 2);
                    ctx.arc(240, 258, 8 * t, 0, Math.PI * 2);
                    ctx.arc(265, 258, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Dial
                    ctx.beginPath();
                    ctx.arc(290, 258, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 258);
                    ctx.lineTo(290 + 8 * t, 258 - 5 * t);
                    ctx.stroke();

                    // Power switch
                    ctx.beginPath();
                    ctx.rect(210, 272, 14 * t, 20 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(217, 277, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw the articulated arms with gripper claws!",
                voice: "Now draw the robot arms! They have joints in the middle and cool gripper claws at the end — like a crane on a construction site!",
                draw(ctx, t) {
                    // Left upper arm
                    ctx.beginPath();
                    ctx.rect(150, 195, 35 * t, 28 * t);
                    ctx.stroke();

                    // Left lower arm
                    ctx.beginPath();
                    ctx.rect(138, 228, 30 * t, 28 * t);
                    ctx.stroke();

                    // Left joint circle
                    ctx.beginPath();
                    ctx.arc(165, 228, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Left gripper claw
                    ctx.beginPath();
                    ctx.moveTo(138, 256);
                    ctx.lineTo(120, 256 + 18 * t);
                    ctx.moveTo(138, 260);
                    ctx.lineTo(120, 260);
                    ctx.moveTo(138, 264);
                    ctx.lineTo(120, 264 - 18 * t);
                    ctx.stroke();
                    // Claw pivot
                    ctx.beginPath();
                    ctx.arc(138, 260, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Right upper arm
                    ctx.beginPath();
                    ctx.rect(315, 195, 35 * t, 28 * t);
                    ctx.stroke();

                    // Right lower arm
                    ctx.beginPath();
                    ctx.rect(332, 228, 30 * t, 28 * t);
                    ctx.stroke();

                    // Right joint circle
                    ctx.beginPath();
                    ctx.arc(335, 228, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Right gripper claw
                    ctx.beginPath();
                    ctx.moveTo(362, 256);
                    ctx.lineTo(380, 256 + 18 * t);
                    ctx.moveTo(362, 260);
                    ctx.lineTo(380, 260);
                    ctx.moveTo(362, 264);
                    ctx.lineTo(380, 264 - 18 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(362, 260, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the boxy legs and feet!",
                voice: "Almost done! Draw two big boxy legs and big flat robot feet. Stomp stomp stomp — the robot is walking!",
                draw(ctx, t) {
                    // Left upper leg box
                    ctx.beginPath();
                    ctx.rect(200, 300, 42 * t, 50 * t);
                    ctx.stroke();

                    // Left knee joint
                    ctx.beginPath();
                    ctx.arc(221, 350, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Left lower leg
                    ctx.beginPath();
                    ctx.rect(207, 358, 28 * t, 20 * t);
                    ctx.stroke();

                    // Left foot
                    ctx.beginPath();
                    ctx.rect(196, 378, 50 * t, 14 * t);
                    ctx.stroke();

                    // Right upper leg box
                    ctx.beginPath();
                    ctx.rect(258, 300, 42 * t, 50 * t);
                    ctx.stroke();

                    // Right knee joint
                    ctx.beginPath();
                    ctx.arc(279, 350, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Right lower leg
                    ctx.beginPath();
                    ctx.rect(265, 358, 28 * t, 20 * t);
                    ctx.stroke();

                    // Right foot
                    ctx.beginPath();
                    ctx.rect(254, 378, 50 * t, 14 * t);
                    ctx.stroke();

                    // Neck connecting head to torso
                    ctx.beginPath();
                    ctx.rect(232, 180, 36 * t, 12 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body silver!", voice: "Paint the robot body a cool silver-grey color!", color: '#2F3542' },
            { text: "Paint the eyes blue!", voice: "Make the visor eyes glow electric blue!", color: '#1E90FF' },
            { text: "Paint the screen green!", voice: "The control panel screen glows green!", color: '#2ED573' },
            { text: "Paint the buttons red!", voice: "The buttons are bright red — don't press the wrong one!", color: '#FF4757' },
            { text: "Paint the antenna orange!", voice: "The antenna glows a warning orange!", color: '#FFA502' },
            { text: "Paint the joints yellow!", voice: "The robot joints shine yellow!", color: '#ECCC68' }
        ]
    },
    {
        id: 'alien',
        name: 'Alien',
        emoji: '\u{1F47E}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the giant alien head!",
                voice: "Let's draw a friendly alien from outer space! Aliens have really really BIG heads — much bigger than their tiny bodies! Draw a huge egg shape for the head.",
                draw(ctx, t) {
                    // Very large bulbous head — wider at top
                    ctx.beginPath();
                    ctx.ellipse(250, 155, 90 * t, 75 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Head bump ridges (alien brain texture)
                    ctx.beginPath();
                    ctx.arc(250, 100, 50 * t, Math.PI * 1.1, Math.PI * 1.9);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 110, 65 * t, Math.PI * 1.15, Math.PI * 1.85);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the enormous wraparound eyes!",
                voice: "Aliens have the biggest eyes you've ever seen — they wrap almost all the way around the head! Draw two giant almond-shaped eyes!",
                draw(ctx, t) {
                    // Left giant eye — large tilted almond
                    ctx.beginPath();
                    ctx.ellipse(205, 158, 35 * t, 22 * t, -0.45, 0, Math.PI * 2);
                    ctx.stroke();

                    // Left pupil — large and dark
                    ctx.beginPath();
                    ctx.ellipse(205, 158, 20 * t, 14 * t, -0.45, 0, Math.PI * 2);
                    ctx.fill();

                    // Left eye shine reflection
                    ctx.save();
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.arc(195, 150, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();

                    // Right giant eye
                    ctx.beginPath();
                    ctx.ellipse(295, 158, 35 * t, 22 * t, 0.45, 0, Math.PI * 2);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.ellipse(295, 158, 20 * t, 14 * t, 0.45, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.save();
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.arc(305, 150, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            },
            {
                text: "Add the small mouth, nose and thin neck!",
                voice: "Aliens have tiny little slits for mouths and noses — they breathe space air! Then draw a very thin neck connecting that big head to the body.",
                draw(ctx, t) {
                    // Small slit mouth
                    ctx.beginPath();
                    ctx.moveTo(235, 198);
                    ctx.bezierCurveTo(242, 202, 258, 202, 265, 198);
                    ctx.stroke();
                    // Lip line
                    ctx.beginPath();
                    ctx.moveTo(237, 196);
                    ctx.bezierCurveTo(243, 200, 257, 200, 263, 196);
                    ctx.stroke();

                    // Two small nostril slits
                    ctx.beginPath();
                    ctx.moveTo(243, 185);
                    ctx.lineTo(246, 191);
                    ctx.moveTo(254, 185);
                    ctx.lineTo(257, 191);
                    ctx.stroke();

                    // Thin neck
                    ctx.beginPath();
                    ctx.moveTo(235, 225);
                    ctx.lineTo(228, 255 * t + 225 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(265, 225);
                    ctx.lineTo(272, 255 * t + 225 * (1 - t));
                    ctx.stroke();
                }
            },
            {
                text: "Draw the small slim body!",
                voice: "The alien body is teeny-tiny compared to that giant head! Draw a small slim oval underneath. Aliens are very thin!",
                draw(ctx, t) {
                    // Small body oval
                    ctx.beginPath();
                    ctx.ellipse(250, 290, 42 * t, 52 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Belly button / suit detail
                    ctx.beginPath();
                    ctx.arc(250, 285, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Ribbed suit lines
                    ctx.beginPath();
                    ctx.moveTo(220, 268);
                    ctx.bezierCurveTo(230, 262, 270, 262, 280, 268);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(216, 280);
                    ctx.bezierCurveTo(228, 274, 272, 274, 284, 280);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(216, 295);
                    ctx.bezierCurveTo(228, 289, 272, 289, 284, 295);
                    ctx.stroke();
                }
            },
            {
                text: "Draw thin arms with three-fingered hands!",
                voice: "Alien arms are long and super thin! Draw them curving out from the body, and at the end draw three long fingers pointing up — they're waving hello to you!",
                draw(ctx, t) {
                    // Left arm — long thin curve
                    ctx.beginPath();
                    ctx.moveTo(212, 262);
                    ctx.bezierCurveTo(190, 255, 165, 240, 140, 218);
                    ctx.stroke();

                    // Left three fingers
                    ctx.beginPath();
                    ctx.moveTo(140, 218);
                    ctx.lineTo(125, 200 * t + 218 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(140, 218);
                    ctx.lineTo(135, 196 * t + 218 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(140, 218);
                    ctx.lineTo(147, 198 * t + 218 * (1 - t));
                    ctx.stroke();
                    // Left fingertip glows (small circles)
                    ctx.beginPath();
                    ctx.arc(125, 200 * t + 218 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.arc(135, 196 * t + 218 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.arc(147, 198 * t + 218 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(288, 262);
                    ctx.bezierCurveTo(310, 255, 335, 240, 360, 218);
                    ctx.stroke();

                    // Right three fingers
                    ctx.beginPath();
                    ctx.moveTo(360, 218);
                    ctx.lineTo(375, 200 * t + 218 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(360, 218);
                    ctx.lineTo(365, 196 * t + 218 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(360, 218);
                    ctx.lineTo(353, 198 * t + 218 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(375, 200 * t + 218 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.arc(365, 196 * t + 218 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.arc(353, 198 * t + 218 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add thin legs, antennae and glowing tips!",
                voice: "Last step! Draw two thin stick legs, then two curvy antennae on top of the head with glowing balls. Take me to your leader! Ha ha ha!",
                draw(ctx, t) {
                    // Left thin leg
                    ctx.beginPath();
                    ctx.moveTo(232, 340);
                    ctx.lineTo(225, 340 + 45 * t);
                    ctx.stroke();
                    // Left foot
                    ctx.beginPath();
                    ctx.moveTo(225, 340 + 45 * t);
                    ctx.bezierCurveTo(215, 340 + 50 * t, 205, 340 + 48 * t, 200, 340 + 42 * t);
                    ctx.stroke();

                    // Right thin leg
                    ctx.beginPath();
                    ctx.moveTo(268, 340);
                    ctx.lineTo(275, 340 + 45 * t);
                    ctx.stroke();
                    // Right foot
                    ctx.beginPath();
                    ctx.moveTo(275, 340 + 45 * t);
                    ctx.bezierCurveTo(285, 340 + 50 * t, 295, 340 + 48 * t, 300, 340 + 42 * t);
                    ctx.stroke();

                    // Left antenna — curving out from top of head
                    ctx.beginPath();
                    ctx.moveTo(220, 85);
                    ctx.bezierCurveTo(210, 65, 195, 52, 185, 40 * t + 85 * (1 - t));
                    ctx.stroke();
                    // Left antenna glowing ball
                    ctx.beginPath();
                    ctx.arc(185, 40 * t + 85 * (1 - t), 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(185, 40 * t + 85 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.fill();

                    // Right antenna
                    ctx.beginPath();
                    ctx.moveTo(280, 85);
                    ctx.bezierCurveTo(290, 65, 305, 52, 315, 40 * t + 85 * (1 - t));
                    ctx.stroke();
                    // Right antenna glowing ball
                    ctx.beginPath();
                    ctx.arc(315, 40 * t + 85 * (1 - t), 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(315, 40 * t + 85 * (1 - t), 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the head green!", voice: "Paint that giant alien head a glowing green!", color: '#2ED573' },
            { text: "Paint the eyes black!", voice: "The huge eyes are very dark and mysterious!", color: '#2F3542' },
            { text: "Paint the body light green!", voice: "The little body is a lighter green!", color: '#7BED9F' },
            { text: "Paint the antennae purple!", voice: "The antennae glow purple with alien energy!", color: '#A855F7' },
            { text: "Paint the fingertips orange!", voice: "The glowing fingertips are orange!", color: '#FF7F50' },
            { text: "Paint the mouth red!", voice: "Add a tiny red mouth — oooh!", color: '#FF4757' }
        ]
    },
    {
        id: 'castle',
        name: 'Castle',
        emoji: '\u{1F3F0}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the main gatehouse wall!",
                voice: "Let's build a magnificent castle! Start with the big main wall in the middle — that's called the gatehouse. Draw a wide tall rectangle!",
                draw(ctx, t) {
                    // Main gatehouse wall
                    ctx.beginPath();
                    ctx.rect(165, 185, 170 * t, 155 * t);
                    ctx.stroke();

                    // Stone texture — horizontal courses
                    for (let row = 0; row < 6; row++) {
                        const ry = 205 + row * 22;
                        const offset = row % 2 === 0 ? 0 : 25;
                        for (let col = 0; col < 5; col++) {
                            ctx.beginPath();
                            ctx.rect(165 + offset + col * 38, ry, 35 * t, 18 * t);
                            ctx.stroke();
                        }
                    }
                }
            },
            {
                text: "Draw the two round towers!",
                voice: "Every great castle has tall round towers on the sides! Draw two tall cylinders — one on the left and one on the right!",
                draw(ctx, t) {
                    // Left round tower — cylindrical (rectangle with curved top)
                    ctx.beginPath();
                    ctx.rect(110, 130, 70 * t, 210 * t);
                    ctx.stroke();
                    // Curved top of left tower
                    ctx.beginPath();
                    ctx.arc(145, 130, 35 * t, Math.PI, 0);
                    ctx.stroke();
                    // Tower cylinder curve lines (3D effect)
                    ctx.beginPath();
                    ctx.arc(145, 200, 35 * t, Math.PI * 1.5, Math.PI * 0.5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(145, 270, 35 * t, Math.PI * 1.5, Math.PI * 0.5);
                    ctx.stroke();

                    // Right round tower
                    ctx.beginPath();
                    ctx.rect(320, 130, 70 * t, 210 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(355, 130, 35 * t, Math.PI, 0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(355, 200, 35 * t, Math.PI * 1.5, Math.PI * 0.5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(355, 270, 35 * t, Math.PI * 1.5, Math.PI * 0.5);
                    ctx.stroke();
                }
            },
            {
                text: "Add conical roofs and crenellated battlements!",
                voice: "Now add pointy conical roofs on the towers — like witch hats! And draw the bumpy battlements on top of the wall where the knights stand guard!",
                draw(ctx, t) {
                    // Left tower conical roof
                    ctx.beginPath();
                    ctx.moveTo(110, 130);
                    ctx.lineTo(145, 130 - 65 * t);
                    ctx.lineTo(180, 130);
                    ctx.closePath();
                    ctx.stroke();
                    // Roof tile lines
                    for (let i = 1; i <= 4; i++) {
                        const ry = 130 - i * 13 * t;
                        const rw = i * 18 * t;
                        ctx.beginPath();
                        ctx.moveTo(145 - rw, ry);
                        ctx.lineTo(145 + rw, ry);
                        ctx.stroke();
                    }

                    // Right tower conical roof
                    ctx.beginPath();
                    ctx.moveTo(320, 130);
                    ctx.lineTo(355, 130 - 65 * t);
                    ctx.lineTo(390, 130);
                    ctx.closePath();
                    ctx.stroke();
                    for (let i = 1; i <= 4; i++) {
                        const ry = 130 - i * 13 * t;
                        const rw = i * 18 * t;
                        ctx.beginPath();
                        ctx.moveTo(355 - rw, ry);
                        ctx.lineTo(355 + rw, ry);
                        ctx.stroke();
                    }

                    // Main wall battlements — square merlons
                    for (let i = 0; i < 6; i++) {
                        ctx.beginPath();
                        ctx.rect(170 + i * 28, 185 - 22 * t, 16 * t, 22 * t);
                        ctx.stroke();
                    }

                    // Left tower battlements
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.rect(116 + i * 22, 130 - 18 * t, 14 * t, 18 * t);
                        ctx.stroke();
                    }

                    // Right tower battlements
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.rect(326 + i * 22, 130 - 18 * t, 14 * t, 18 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Draw the large arched gate with portcullis!",
                voice: "Every castle needs a big gate to let the knights in! Draw a tall arch in the middle, then add the portcullis — that's the metal grate that goes up and down!",
                draw(ctx, t) {
                    // Arched gate opening
                    ctx.beginPath();
                    ctx.moveTo(218, 340);
                    ctx.lineTo(218, 260);
                    ctx.arc(250, 260, 32, Math.PI, 0);
                    ctx.lineTo(282, 340);
                    ctx.stroke();

                    // Gate arch detail (double arch)
                    ctx.beginPath();
                    ctx.moveTo(222, 340);
                    ctx.lineTo(222, 263);
                    ctx.arc(250, 263, 28, Math.PI, 0);
                    ctx.lineTo(278, 340);
                    ctx.stroke();

                    // Portcullis vertical bars
                    for (let i = 0; i < 5; i++) {
                        const px = 220 + i * 15;
                        ctx.beginPath();
                        ctx.moveTo(px, 262);
                        ctx.lineTo(px, 340 * t + 262 * (1 - t));
                        ctx.stroke();
                    }

                    // Portcullis horizontal bars
                    ctx.beginPath();
                    ctx.moveTo(220, 280 * t + 262 * (1 - t));
                    ctx.lineTo(280, 280 * t + 262 * (1 - t));
                    ctx.moveTo(220, 300 * t + 262 * (1 - t));
                    ctx.lineTo(280, 300 * t + 262 * (1 - t));
                    ctx.moveTo(220, 320 * t + 262 * (1 - t));
                    ctx.lineTo(280, 320 * t + 262 * (1 - t));
                    ctx.stroke();

                    // Drawbridge path
                    ctx.beginPath();
                    ctx.moveTo(210, 340);
                    ctx.lineTo(200, 360 * t + 340 * (1 - t));
                    ctx.lineTo(300, 360 * t + 340 * (1 - t));
                    ctx.lineTo(290, 340);
                    ctx.stroke();
                    // Drawbridge planks
                    for (let p = 0; p < 4; p++) {
                        const py = 344 + p * 4;
                        ctx.beginPath();
                        ctx.moveTo(210, py * t + 340 * (1 - t));
                        ctx.lineTo(290, py * t + 340 * (1 - t));
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add tower windows and arrow slits!",
                voice: "Castles have tall thin windows called arrow slits — archers shoot arrows through them! Add some to the towers and a nice arched window on the gatehouse!",
                draw(ctx, t) {
                    // Left tower arrow slits
                    ctx.beginPath();
                    ctx.rect(137, 165, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(155, 165, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(137, 225, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(155, 225, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(137, 285, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(155, 285, 8 * t, 25 * t);
                    ctx.stroke();

                    // Right tower arrow slits
                    ctx.beginPath();
                    ctx.rect(337, 165, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(355, 165, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(337, 225, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(355, 225, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(337, 285, 8 * t, 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(355, 285, 8 * t, 25 * t);
                    ctx.stroke();

                    // Gatehouse arched windows (two flanking the gate)
                    ctx.beginPath();
                    ctx.rect(175, 200, 22 * t, 30 * t);
                    ctx.arc(186, 200, 11 * t, Math.PI, 0);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.rect(303, 200, 22 * t, 30 * t);
                    ctx.arc(314, 200, 11 * t, Math.PI, 0);
                    ctx.stroke();
                }
            },
            {
                text: "Add flags, path and finishing details!",
                voice: "Finally, draw fluttering flags on top of the towers, and a path leading up to the gate. The kingdom is protected! Huzzah!",
                draw(ctx, t) {
                    // Left flag pole
                    ctx.beginPath();
                    ctx.moveTo(145, 65);
                    ctx.lineTo(145, 65 - 30 * t);
                    ctx.stroke();
                    // Left flag pennant
                    ctx.beginPath();
                    ctx.moveTo(145, 65 - 30 * t);
                    ctx.lineTo(145 + 28 * t, 65 - 20 * t);
                    ctx.lineTo(145, 65 - 10 * t);
                    ctx.closePath();
                    ctx.stroke();

                    // Right flag pole
                    ctx.beginPath();
                    ctx.moveTo(355, 65);
                    ctx.lineTo(355, 65 - 30 * t);
                    ctx.stroke();
                    // Right flag pennant
                    ctx.beginPath();
                    ctx.moveTo(355, 65 - 30 * t);
                    ctx.lineTo(355 + 28 * t, 65 - 20 * t);
                    ctx.lineTo(355, 65 - 10 * t);
                    ctx.closePath();
                    ctx.stroke();

                    // Path to gate (perspective trapezoid)
                    ctx.beginPath();
                    ctx.moveTo(210, 360);
                    ctx.lineTo(170, 390 * t + 360 * (1 - t));
                    ctx.moveTo(290, 360);
                    ctx.lineTo(330, 390 * t + 360 * (1 - t));
                    ctx.moveTo(170, 390 * t + 360 * (1 - t));
                    ctx.lineTo(330, 390 * t + 360 * (1 - t));
                    ctx.stroke();

                    // Path cobblestone dots
                    const pathStones = [
                        [220, 375], [250, 375], [280, 375], [230, 385], [260, 385], [290, 385]
                    ];
                    pathStones.forEach(([px, py]) => {
                        ctx.beginPath();
                        ctx.arc(px, py * t + 360 * (1 - t), 5 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    });
                }
            }
        ],
        paintSteps: [
            { text: "Paint the walls grey!", voice: "Paint the castle walls a strong stone grey!", color: '#2F3542' },
            { text: "Paint the roofs red!", voice: "The tower roofs are a royal red!", color: '#FF4757' },
            { text: "Paint the gate brown!", voice: "The wooden drawbridge is brown!", color: '#8B4513' },
            { text: "Paint the flags yellow!", voice: "The royal flags wave in golden yellow!", color: '#ECCC68' },
            { text: "Paint the windows blue!", voice: "The windows glow blue in the moonlight!", color: '#1E90FF' },
            { text: "Paint the path orange!", voice: "The cobblestone path is a warm orange!", color: '#FF7F50' }
        ]
    },
    {
        id: 'snowman',
        name: 'Snowman',
        emoji: '\u26C4',
        category: 'fantasy',
        steps: [
            {
                text: "Stack three snowballs!",
                voice: "Let's build a snowman! Roll three big snowballs and stack them up — one big one on the bottom, a medium one in the middle, and a small one on top for the head!",
                draw(ctx, t) {
                    // Large bottom snowball
                    ctx.beginPath();
                    ctx.arc(250, 305, 75 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Medium middle snowball
                    ctx.beginPath();
                    ctx.arc(250, 210, 52 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Small head snowball
                    ctx.beginPath();
                    ctx.arc(250, 138, 36 * t, 0, Math.PI * 2);
                    ctx.stroke();

                    // Snow texture — scattered small arcs on each ball
                    const snowDetails = [
                        [220, 290], [270, 285], [240, 320], [280, 310], [215, 310],
                        [225, 205], [265, 200], [245, 225],
                        [235, 132], [258, 128]
                    ];
                    snowDetails.forEach(([sx, sy]) => {
                        ctx.beginPath();
                        ctx.arc(sx, sy, 6 * t, Math.PI * 1.1, Math.PI * 1.9);
                        ctx.stroke();
                    });
                }
            },
            {
                text: "Draw the top hat!",
                voice: "Every snowman needs a fancy top hat! Draw a wide brim, then a tall rectangle on top, and add a hat band across the middle!",
                draw(ctx, t) {
                    // Hat brim (wide ellipse)
                    ctx.beginPath();
                    ctx.ellipse(250, 105, 48 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Hat body (tall rectangle)
                    ctx.beginPath();
                    ctx.rect(218, 105 - 50 * t, 64, 50 * t);
                    ctx.stroke();

                    // Hat band — stripe near brim
                    ctx.beginPath();
                    ctx.moveTo(218, 105 - 12 * t);
                    ctx.lineTo(282, 105 - 12 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(218, 105 - 18 * t);
                    ctx.lineTo(282, 105 - 18 * t);
                    ctx.stroke();

                    // Hat top crease line
                    ctx.beginPath();
                    ctx.moveTo(228, 105 - 50 * t);
                    ctx.bezierCurveTo(235, 105 - 47 * t, 265, 105 - 47 * t, 272, 105 - 50 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the face!",
                voice: "Give your snowman a happy face! Draw two big coal eyes, a pointy carrot nose, and a big curvy smile made of little dots. Smile snowman, smile!",
                draw(ctx, t) {
                    // Coal eyes (filled circles)
                    ctx.beginPath();
                    ctx.arc(235, 130, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(265, 130, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Eye shine
                    ctx.save();
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.arc(232, 127, 2 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(262, 127, 2 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();

                    // Carrot nose (triangle pointing right)
                    ctx.beginPath();
                    ctx.moveTo(248, 138);
                    ctx.lineTo(248 + 22 * t, 140);
                    ctx.lineTo(250, 144);
                    ctx.closePath();
                    ctx.stroke();
                    // Carrot ridges
                    ctx.beginPath();
                    ctx.moveTo(256, 138.5);
                    ctx.lineTo(256, 143);
                    ctx.moveTo(262, 139);
                    ctx.lineTo(262, 143);
                    ctx.stroke();

                    // Smile — arc of coal dots
                    for (let i = 0; i < 7; i++) {
                        const angle = Math.PI * 0.15 + (i / 6) * Math.PI * 0.7;
                        const sx = 250 + Math.cos(angle) * 22;
                        const sy = 138 + Math.sin(angle) * 14;
                        ctx.beginPath();
                        ctx.arc(sx, sy, 3 * t, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            },
            {
                text: "Add a scarf and buttons!",
                voice: "Brrr it's cold! Wrap a cozy scarf around the snowman's neck — make it nice and thick and loopy! Then add three big buttons on the tummy!",
                draw(ctx, t) {
                    // Scarf wrap — two loops around neck
                    ctx.beginPath();
                    ctx.ellipse(250, 162, 42 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 170, 38 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    // Scarf tail hanging down left side
                    ctx.beginPath();
                    ctx.moveTo(213, 162);
                    ctx.bezierCurveTo(208, 175, 205, 188, 210, 200 * t + 162 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(208, 162);
                    ctx.bezierCurveTo(202, 176, 198, 190, 204, 202 * t + 162 * (1 - t));
                    ctx.stroke();
                    // Scarf fringe
                    for (let f = 0; f < 4; f++) {
                        ctx.beginPath();
                        ctx.moveTo(204 + f * 2, 200 * t + 162 * (1 - t));
                        ctx.lineTo(203 + f * 2, 210 * t + 162 * (1 - t));
                        ctx.stroke();
                    }

                    // Three coal buttons
                    ctx.beginPath();
                    ctx.arc(250, 192, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 213, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 234, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw stick arms with twig fingers!",
                voice: "Now the arms! Draw two big stick arms reaching out from the sides, and add little twigs at the end for fingers. The snowman is giving you a big hug!",
                draw(ctx, t) {
                    // Left main arm branch
                    ctx.beginPath();
                    ctx.moveTo(202, 198);
                    ctx.bezierCurveTo(175, 188, 155, 175, 135, 162);
                    ctx.stroke();

                    // Left arm twig fingers (3 twigs)
                    ctx.beginPath();
                    ctx.moveTo(135, 162);
                    ctx.lineTo(118, 148 * t + 162 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(135, 162);
                    ctx.lineTo(122, 145 * t + 162 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(135, 162);
                    ctx.lineTo(128, 143 * t + 162 * (1 - t));
                    ctx.stroke();
                    // Secondary twigs on left arm
                    ctx.beginPath();
                    ctx.moveTo(155, 175);
                    ctx.lineTo(150, 162 * t + 175 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(172, 182);
                    ctx.lineTo(168, 170 * t + 182 * (1 - t));
                    ctx.stroke();

                    // Right main arm branch
                    ctx.beginPath();
                    ctx.moveTo(298, 198);
                    ctx.bezierCurveTo(325, 188, 345, 175, 365, 162);
                    ctx.stroke();

                    // Right arm twig fingers
                    ctx.beginPath();
                    ctx.moveTo(365, 162);
                    ctx.lineTo(382, 148 * t + 162 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(365, 162);
                    ctx.lineTo(378, 145 * t + 162 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(365, 162);
                    ctx.lineTo(372, 143 * t + 162 * (1 - t));
                    ctx.stroke();
                    // Secondary twigs on right arm
                    ctx.beginPath();
                    ctx.moveTo(345, 175);
                    ctx.lineTo(350, 162 * t + 175 * (1 - t));
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(328, 182);
                    ctx.lineTo(332, 170 * t + 182 * (1 - t));
                    ctx.stroke();
                }
            },
            {
                text: "Add a broom and falling snowflakes!",
                voice: "Every snowman loves holding a broom! Draw a long stick with bristles at the bottom. And add pretty snowflakes falling all around! Do you want to build a snowman?",
                draw(ctx, t) {
                    // Broom handle
                    ctx.beginPath();
                    ctx.moveTo(295, 220);
                    ctx.lineTo(355, 320 * t + 220 * (1 - t));
                    ctx.stroke();

                    // Broom head (wedge of bristles)
                    ctx.beginPath();
                    ctx.moveTo(350, 315 * t + 220 * (1 - t));
                    ctx.lineTo(365, 308 * t + 220 * (1 - t));
                    ctx.lineTo(380, 328 * t + 220 * (1 - t));
                    ctx.lineTo(358, 340 * t + 220 * (1 - t));
                    ctx.closePath();
                    ctx.stroke();
                    // Bristle lines
                    for (let b = 0; b < 5; b++) {
                        ctx.beginPath();
                        ctx.moveTo(352 + b * 5, 318 * t + 220 * (1 - t));
                        ctx.lineTo(350 + b * 6, 338 * t + 220 * (1 - t));
                        ctx.stroke();
                    }

                    // Snowflakes scattered in sky
                    const flakes = [
                        [80, 80], [130, 55], [380, 70], [420, 110], [60, 160], [450, 175], [100, 230], [430, 250]
                    ];
                    flakes.forEach(([fx, fy]) => {
                        const size = 8 * t;
                        ctx.beginPath();
                        ctx.moveTo(fx - size, fy);
                        ctx.lineTo(fx + size, fy);
                        ctx.moveTo(fx, fy - size);
                        ctx.lineTo(fx, fy + size);
                        ctx.moveTo(fx - size * 0.7, fy - size * 0.7);
                        ctx.lineTo(fx + size * 0.7, fy + size * 0.7);
                        ctx.moveTo(fx + size * 0.7, fy - size * 0.7);
                        ctx.lineTo(fx - size * 0.7, fy + size * 0.7);
                        ctx.stroke();
                    });
                }
            }
        ],
        paintSteps: [
            { text: "Paint the snowballs white!", voice: "Paint all three snowballs a bright fluffy white!", color: '#FFFFFF' },
            { text: "Paint the hat black!", voice: "Give him a very fancy black top hat!", color: '#2F3542' },
            { text: "Paint the scarf red!", voice: "The cozy scarf is a warm bright red!", color: '#FF4757' },
            { text: "Paint the nose orange!", voice: "Paint that carrot nose a bright orange!", color: '#FF7F50' },
            { text: "Paint the buttons black!", voice: "The coal buttons are shiny black!", color: '#2F3542' },
            { text: "Paint the snowflakes blue!", voice: "The falling snowflakes are icy light blue!", color: '#70A1FF' }
        ]
    },
    {
        id: 'diwali_gun',
        name: 'Diwali Gun',
        emoji: '\u{1F9E8}',
        category: 'fantasy',
        steps: [
            {
                text: 'Draw the plump main body of the gun!',
                voice: "Happy Diwali! Let's draw a festive cracker gun! First make a chubby rectangle shape — that is the colorful plastic body in the middle!",
                draw(ctx, t) {
                    const w = 95 * t;
                    const h = 42 * t;
                    const cx = 200;
                    const cy = 198;
                    const r = 14 * t;
                    ctx.beginPath();
                    ctx.moveTo(cx - w + r, cy - h);
                    ctx.lineTo(cx + w - r, cy - h);
                    ctx.quadraticCurveTo(cx + w, cy - h, cx + w, cy - h + r);
                    ctx.lineTo(cx + w, cy + h - r);
                    ctx.quadraticCurveTo(cx + w, cy + h, cx + w - r, cy + h);
                    ctx.lineTo(cx - w + r, cy + h);
                    ctx.quadraticCurveTo(cx - w, cy + h, cx - w, cy + h - r);
                    ctx.lineTo(cx - w, cy - h + r);
                    ctx.quadraticCurveTo(cx - w, cy - h, cx - w + r, cy - h);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add a long front barrel to the muzzle!",
                voice: "Now the long front tube! Real toy barrels point forward just like a tiny tunnel where the cap rings pop! Stretch it to the right!",
                draw(ctx, t) {
                    const startX = 280;
                    const y = 198;
                    const len = 100 * t;
                    const th = 18 * t;
                    ctx.beginPath();
                    ctx.moveTo(startX, y - th);
                    ctx.lineTo(startX + len, y - th);
                    ctx.lineTo(startX + len, y + th);
                    ctx.lineTo(startX, y + th);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(startX + len, y, 3 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the hand grip and trigger guard below!",
                voice: "This is the handle! Draw a bent grip so your hand can hold the toy safely, and a nice rounded trigger guard on top! Easy peasy!",
                draw(ctx, t) {
                    // Grip (kiddie style — flared, rounded)
                    const gy = 218;
                    const gl = 52 * t;
                    const gx = 150;
                    ctx.beginPath();
                    ctx.moveTo(gx - 15, gy);
                    ctx.lineTo(gx - 25, gy + gl);
                    ctx.quadraticCurveTo(gx - 22, gy + gl + 10 * t, gx + 5, gy + gl + 8 * t);
                    ctx.lineTo(gx + 35, gy + gl);
                    ctx.lineTo(gx + 45, gy);
                    ctx.quadraticCurveTo(gx + 28, gy - 5, gx, gy);
                    ctx.closePath();
                    ctx.stroke();
                    // Trigger guard (semicircle, grows with t)
                    ctx.beginPath();
                    ctx.arc(195, 210, 18 * t, 0.1 * Math.PI, 0.9 * Math.PI, false);
                    ctx.stroke();
                }
            },
            {
                text: "Add the dimpled roll-cap wheel on top!",
                voice: "The tiny wheel on top is where the roll caps go — click click pop! Add a circle with little bumps so it looks like a real cracker cap toy!",
                draw(ctx, t) {
                    const cx = 200;
                    const cy = 165;
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, 32 * t, 12 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    for (let i = 0; i < 6; i++) {
                        const a = (i / 6) * Math.PI * 2;
                        const x1 = cx + Math.cos(a) * 18;
                        const y1 = cy + Math.sin(a) * 6;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(
                            x1 + Math.cos(a) * 8 * t,
                            y1 + Math.sin(a) * 2.5 * t
                        );
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Draw a shiny star and little rivets for decoration!",
                voice: "Festival time needs sparkle! Draw a star and two dots on the side so your gun looks like a real Diwali toy in the bazaar! So bright!",
                draw(ctx, t) {
                    // Star (center 208, 198) — only scale the outer radius
                    const sx = 208;
                    const sy = 198;
                    const outer = 12 * t;
                    const spikes = 5;
                    const inner = outer * 0.4;
                    ctx.beginPath();
                    for (let i = 0; i < 2 * spikes; i++) {
                        const a = (i * Math.PI) / spikes - Math.PI / 2;
                        const rad = i % 2 === 0 ? outer : inner;
                        const px = sx + Math.cos(a) * rad;
                        const py = sy + Math.sin(a) * rad;
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(160, 195, 2.5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(175, 200, 2.5 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add spark puffs and stars at the muzzle!",
                voice: "The last pop of joy! Add tiny light streaks and mini stars at the muzzle, like a safe toy sparkle for Diwali night! Yippee! Happy Diwali!",
                draw(ctx, t) {
                    // Muzzle at fixed tip (matches barrel from startX 280, length 100, cap at +3)
                    const mx = 383;
                    const my = 198;
                    const rays = 7;
                    for (let r = 0; r < rays; r++) {
                        const a = (r / rays) * Math.PI * 1.4 - 0.35 * Math.PI;
                        const len = 12 + (r % 2) * 4;
                        ctx.beginPath();
                        ctx.moveTo(mx, my);
                        ctx.lineTo(
                            mx + Math.cos(a) * len * t,
                            my + Math.sin(a) * len * t
                        );
                        ctx.stroke();
                    }
                    const mini = [
                        [405, 185], [420, 205], [432, 188]
                    ];
                    mini.forEach(([fx, fy]) => {
                        const s = 3 * t;
                        ctx.beginPath();
                        ctx.moveTo(fx, fy - s);
                        ctx.lineTo(fx, fy + s);
                        ctx.moveTo(fx - s, fy);
                        ctx.lineTo(fx + s, fy);
                        ctx.stroke();
                    });
                }
            }
        ],
        paintSteps: [
            { text: "Color the main body red!", voice: "First paint the big main body a bright happy red — the color of every Diwali bazaar toy!", color: '#E63946' },
            { text: "Paint the barrel and roll-cap silver!", voice: "The long barrel and the bumpy top wheel are shiny silvery metal gray!", color: '#B8B8C8' },
            { text: "Fill the hand grip green!", voice: "The curved grip is a jolly deep green, like a festive bunting!", color: '#1B8A4C' },
            { text: "Paint the muzzle and sparks gold!", voice: "Make the puffs and muzzle end glittery gold like Diwali firework sparkles in the sky!", color: '#F4C430' },
            { text: "Color the star and rivets gold-yellow!", voice: "Fill the little star and dots with a sunny gold yellow to match the fun!", color: '#FFD700' },
            { text: "Paint the trigger and outlines dark gray!", voice: "Use a soft dark gray for the trigger, guard lines, and tiny details in the cracker design!", color: '#3D3D4A' }
        ]
    }
];
