export const fantasy = [
    {
        id: 'dragon',
        name: 'Dragon',
        emoji: '\u{1F432}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw a wiggly S body!",
                voice: "Draw a long wiggly line for the dragon body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(350, 100);
                    ctx.bezierCurveTo(200, 50, 200, 350 * t, 100, 300);
                    ctx.stroke();
                }
            },
            {
                text: "Add a round head!",
                voice: "Draw a circle at the top for the dragon's head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(355, 95, 30 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add pointy wings!",
                voice: "Draw two big triangles for dragon wings. Whoosh!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(230, 170);
                    ctx.lineTo(230 + 60 * t, 170 - 80 * t);
                    ctx.lineTo(230 + 70 * t, 170);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(200, 200);
                    ctx.lineTo(200 - 50 * t, 200 - 70 * t);
                    ctx.lineTo(200 - 5 * t, 200);
                    ctx.stroke();
                }
            },
            {
                text: "Draw fire breath!",
                voice: "Dragons breathe fire! Draw wiggly lines coming from the mouth.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(385, 90);
                    ctx.bezierCurveTo(400, 70, 420 * t, 80, 430, 95);
                    ctx.moveTo(385, 100);
                    ctx.bezierCurveTo(400, 90, 430 * t, 95, 440, 105);
                    ctx.stroke();
                }
            },
            {
                text: "Add spikes and eyes!",
                voice: "Draw little triangles along the back for spikes, and two dots for eyes.",
                draw(ctx, t) {
                    // eyes
                    ctx.beginPath();
                    ctx.arc(348, 88, 3 * t, 0, Math.PI * 2);
                    ctx.arc(365, 88, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // spikes
                    for (let i = 0; i < 4; i++) {
                        const x = 310 - i * 50;
                        const y = 120 + i * 45;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x - 8, y - 15 * t);
                        ctx.lineTo(x - 16, y);
                        ctx.stroke();
                    }
                }
            }
        ]
    },
    {
        id: 'trex',
        name: 'T-Rex',
        emoji: '\u{1F996}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw a tall egg body!",
                voice: "Draw a big standing egg for the dinosaur.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 230, 70 * t, 100 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a big head!",
                voice: "Draw a rectangle on top for the head. Rawr!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(260, 100, 80 * t, 60 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw tiny arms!",
                voice: "T-Rex has teeny tiny arms! Draw two short lines.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(195, 200);
                    ctx.lineTo(195 - 30 * t, 220);
                    ctx.lineTo(195 - 20 * t, 230);
                    ctx.moveTo(305, 200);
                    ctx.lineTo(305 + 30 * t, 220);
                    ctx.lineTo(305 + 20 * t, 230);
                    ctx.stroke();
                }
            },
            {
                text: "Add big legs and a tail!",
                voice: "Draw two thick legs and a long tail for balance!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(220, 320);
                    ctx.lineTo(210, 320 + 50 * t);
                    ctx.lineTo(190, 320 + 50 * t);
                    ctx.moveTo(280, 320);
                    ctx.lineTo(290, 320 + 50 * t);
                    ctx.lineTo(310, 320 + 50 * t);
                    ctx.stroke();
                    // tail
                    ctx.beginPath();
                    ctx.moveTo(200, 250);
                    ctx.bezierCurveTo(160, 280, 120 * t, 260, 100, 280);
                    ctx.stroke();
                }
            },
            {
                text: "Add teeth and eyes!",
                voice: "Draw sharp zigzag teeth and two fierce eyes. Roar!",
                draw(ctx, t) {
                    // eyes
                    ctx.beginPath();
                    ctx.arc(290, 120, 5 * t, 0, Math.PI * 2);
                    ctx.arc(320, 120, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // teeth
                    ctx.beginPath();
                    for (let i = 0; i < 4; i++) {
                        const x = 270 + i * 15;
                        ctx.moveTo(x, 155);
                        ctx.lineTo(x + 7, 155 + 10 * t);
                        ctx.lineTo(x + 14, 155);
                    }
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'rocket',
        name: 'Rocket',
        emoji: '\u{1F680}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw a tall rectangle!",
                voice: "Draw a tall box pointing up to the stars.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(210, 120, 80 * t, 180);
                    ctx.stroke();
                }
            },
            {
                text: "Add a pointy nose!",
                voice: "Draw a triangle on top for the nose cone.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(210, 120);
                    ctx.lineTo(250, 120 - 80 * t);
                    ctx.lineTo(290, 120);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add side fins!",
                voice: "Draw two triangles on the sides for fins to steer!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(210, 300);
                    ctx.lineTo(210 - 30 * t, 300 + 20 * t);
                    ctx.lineTo(210, 270);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 300);
                    ctx.lineTo(290 + 30 * t, 300 + 20 * t);
                    ctx.lineTo(290, 270);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a window!",
                voice: "Draw a circle in the middle for the window. An astronaut is inside!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 200, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add fire at the bottom!",
                voice: "Draw flames at the bottom. Blast off! Three, two, one!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(220, 300);
                    ctx.bezierCurveTo(225, 320, 235, 300 + 60 * t, 250, 300 + 50 * t);
                    ctx.bezierCurveTo(265, 300 + 60 * t, 275, 320, 280, 300);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'unicorn',
        name: 'Unicorn',
        emoji: '\u{1F984}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw an oval head!",
                voice: "Let's draw a magical unicorn! Start with an oval for the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(280, 140, 50 * t, 40 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a magical horn!",
                voice: "Draw a big triangle on top for the magical horn!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(290, 105);
                    ctx.lineTo(300, 105 - 60 * t);
                    ctx.lineTo(310, 105);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a flowing mane!",
                voice: "Draw wavy lines for a beautiful flowing mane!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(240, 115);
                    ctx.bezierCurveTo(220, 130, 210, 160 * t, 230, 180);
                    ctx.moveTo(245, 125);
                    ctx.bezierCurveTo(225, 140, 220, 170 * t, 240, 190);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the body!",
                voice: "Draw a big oval for the unicorn's body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 250, 80 * t, 55 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add legs and an eye!",
                voice: "Draw four legs and a big sparkly eye!",
                draw(ctx, t) {
                    // legs
                    ctx.beginPath();
                    ctx.moveTo(180, 295);
                    ctx.lineTo(175, 295 + 50 * t);
                    ctx.moveTo(210, 300);
                    ctx.lineTo(205, 300 + 50 * t);
                    ctx.moveTo(260, 300);
                    ctx.lineTo(265, 300 + 50 * t);
                    ctx.moveTo(290, 295);
                    ctx.lineTo(295, 295 + 50 * t);
                    ctx.stroke();
                    // eye
                    ctx.beginPath();
                    ctx.arc(300, 135, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        ]
    },
    {
        id: 'robot',
        name: 'Robot',
        emoji: '\u{1F916}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw a square head!",
                voice: "Let's draw a robot! Start with a square for the head. Beep boop!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(210, 80, 80 * t, 70 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add robot eyes and mouth!",
                voice: "Draw two circles for eyes and a zigzag mouth!",
                draw(ctx, t) {
                    // eyes
                    ctx.beginPath();
                    ctx.arc(232, 110, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(268, 110, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // pupils
                    ctx.beginPath();
                    ctx.arc(232, 110, 4 * t, 0, Math.PI * 2);
                    ctx.arc(268, 110, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // zigzag mouth
                    ctx.beginPath();
                    ctx.moveTo(225, 135);
                    for (let i = 0; i < 4; i++) {
                        ctx.lineTo(225 + (i * 12 + 6) * t, i % 2 === 0 ? 140 : 130);
                    }
                    ctx.stroke();
                }
            },
            {
                text: "Draw a rectangle body!",
                voice: "Draw a bigger rectangle under the head for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(200, 155, 100 * t, 110 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add an antenna!",
                voice: "Draw a line on top of the head with a little circle. It receives signals!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(250, 80);
                    ctx.lineTo(250, 80 - 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 50, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw arms and hands!",
                voice: "Draw two lines going out from the body for arms, with claws at the end!",
                draw(ctx, t) {
                    // left arm
                    ctx.beginPath();
                    ctx.moveTo(200, 180);
                    ctx.lineTo(200 - 40 * t, 210);
                    ctx.stroke();
                    // left claw
                    ctx.beginPath();
                    ctx.moveTo(160, 210);
                    ctx.lineTo(155, 210 + 15 * t);
                    ctx.moveTo(160, 210);
                    ctx.lineTo(165, 210 + 15 * t);
                    ctx.stroke();
                    // right arm
                    ctx.beginPath();
                    ctx.moveTo(300, 180);
                    ctx.lineTo(300 + 40 * t, 210);
                    ctx.stroke();
                    // right claw
                    ctx.beginPath();
                    ctx.moveTo(340, 210);
                    ctx.lineTo(335, 210 + 15 * t);
                    ctx.moveTo(340, 210);
                    ctx.lineTo(345, 210 + 15 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add legs and buttons!",
                voice: "Draw two legs at the bottom and some buttons on the tummy!",
                draw(ctx, t) {
                    // legs
                    ctx.beginPath();
                    ctx.rect(215, 265, 25 * t, 40 * t);
                    ctx.rect(260, 265, 25 * t, 40 * t);
                    ctx.stroke();
                    // buttons on body
                    ctx.beginPath();
                    ctx.arc(250, 195, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 220, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 245, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'alien',
        name: 'Alien',
        emoji: '\u{1F47E}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw a big oval head!",
                voice: "Let's draw a friendly alien! Draw a big upside-down egg for the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 140, 70 * t, 55 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add huge alien eyes!",
                voice: "Aliens have gigantic eyes! Draw two big tilted ovals.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(220, 140, 22 * t, 28 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(280, 140, 22 * t, 28 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // shiny pupils
                    ctx.beginPath();
                    ctx.arc(220, 140, 8 * t, 0, Math.PI * 2);
                    ctx.arc(280, 140, 8 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw a small body!",
                voice: "Aliens have skinny little bodies. Draw a small oval underneath.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 240, 35 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a little mouth!",
                voice: "Draw a tiny oval for the mouth. Oooh!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 172, 8 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw thin arms and legs!",
                voice: "Draw stick arms and legs. The alien is waving hello!",
                draw(ctx, t) {
                    // arms
                    ctx.beginPath();
                    ctx.moveTo(220, 215);
                    ctx.bezierCurveTo(190, 200, 160 * t, 180, 150, 170);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(280, 215);
                    ctx.bezierCurveTo(310, 200, 340 * t, 180, 350, 170);
                    ctx.stroke();
                    // three fingers each
                    ctx.beginPath();
                    ctx.moveTo(150, 170);
                    ctx.lineTo(140, 170 - 12 * t);
                    ctx.moveTo(150, 170);
                    ctx.lineTo(145, 170 - 15 * t);
                    ctx.moveTo(150, 170);
                    ctx.lineTo(152, 170 - 14 * t);
                    ctx.moveTo(350, 170);
                    ctx.lineTo(360, 170 - 12 * t);
                    ctx.moveTo(350, 170);
                    ctx.lineTo(355, 170 - 15 * t);
                    ctx.moveTo(350, 170);
                    ctx.lineTo(348, 170 - 14 * t);
                    ctx.stroke();
                    // legs
                    ctx.beginPath();
                    ctx.moveTo(240, 288);
                    ctx.lineTo(230, 288 + 50 * t);
                    ctx.moveTo(260, 288);
                    ctx.lineTo(270, 288 + 50 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add antennae!",
                voice: "Draw two antennae on top with little glowing balls. Take me to your leader!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(225, 90);
                    ctx.bezierCurveTo(220, 70, 210, 60 * t, 205, 50);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(275, 90);
                    ctx.bezierCurveTo(280, 70, 290, 60 * t, 295, 50);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(205, 50, 6 * t, 0, Math.PI * 2);
                    ctx.arc(295, 50, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'castle',
        name: 'Castle',
        emoji: '\u{1F3F0}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw the main wall!",
                voice: "Let's build a castle! Draw a big rectangle for the main wall.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(150, 180, 200 * t, 150 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add two towers!",
                voice: "Draw two tall rectangles on the sides for the towers!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(130, 120, 50 * t, 210 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(320, 120, 50 * t, 210 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw pointy roofs!",
                voice: "Add pointy triangle roofs on top of each tower!",
                draw(ctx, t) {
                    // left tower roof
                    ctx.beginPath();
                    ctx.moveTo(125, 120);
                    ctx.lineTo(155, 120 - 50 * t);
                    ctx.lineTo(185, 120);
                    ctx.closePath();
                    ctx.stroke();
                    // right tower roof
                    ctx.beginPath();
                    ctx.moveTo(315, 120);
                    ctx.lineTo(345, 120 - 50 * t);
                    ctx.lineTo(375, 120);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add a gate!",
                voice: "Draw a big arch at the bottom for the castle gate. Open sesame!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(225, 330);
                    ctx.lineTo(225, 330 - 55 * t);
                    ctx.arc(250, 275, 25, Math.PI, 0);
                    ctx.lineTo(275, 330);
                    ctx.stroke();
                }
            },
            {
                text: "Draw battlements!",
                voice: "Add little square bumps along the top. Knights stand behind these!",
                draw(ctx, t) {
                    // main wall battlements
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.rect(160 + i * 35, 180 - 15 * t, 20 * t, 15 * t);
                        ctx.stroke();
                    }
                    // tower battlements
                    for (let i = 0; i < 2; i++) {
                        ctx.beginPath();
                        ctx.rect(135 + i * 20, 120 - 12 * t, 12 * t, 12 * t);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.rect(325 + i * 20, 120 - 12 * t, 12 * t, 12 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add windows and flags!",
                voice: "Draw little windows on the towers and flags on top. The kingdom is safe!",
                draw(ctx, t) {
                    // windows
                    ctx.beginPath();
                    ctx.arc(155, 200, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(345, 200, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(155, 260, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(345, 260, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // flags
                    ctx.beginPath();
                    ctx.moveTo(155, 70);
                    ctx.lineTo(155, 70 - 25 * t);
                    ctx.lineTo(155 + 18 * t, 70 - 18 * t);
                    ctx.lineTo(155, 70 - 10 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(345, 70);
                    ctx.lineTo(345, 70 - 25 * t);
                    ctx.lineTo(345 + 18 * t, 70 - 18 * t);
                    ctx.lineTo(345, 70 - 10 * t);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'snowman',
        name: 'Snowman',
        emoji: '\u{26C4}',
        category: 'fantasy',
        steps: [
            {
                text: "Draw a big bottom snowball!",
                voice: "Let's build a snowman! Draw a big circle at the bottom.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 290, 70 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a medium middle snowball!",
                voice: "Stack a medium-sized circle on top!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 190, 50 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a small head snowball!",
                voice: "And a small circle on top for the head!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 120, 35 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a face!",
                voice: "Add two dot eyes, a carrot nose, and a big smile!",
                draw(ctx, t) {
                    // eyes
                    ctx.beginPath();
                    ctx.arc(238, 112, 4 * t, 0, Math.PI * 2);
                    ctx.arc(262, 112, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // carrot nose
                    ctx.beginPath();
                    ctx.moveTo(248, 122);
                    ctx.lineTo(250, 122 + 18 * t);
                    ctx.lineTo(255, 122);
                    ctx.closePath();
                    ctx.stroke();
                    // smile (dots)
                    for (let i = 0; i < 5; i++) {
                        const angle = 0.2 * Math.PI + (i / 4) * 0.6 * Math.PI;
                        ctx.beginPath();
                        ctx.arc(250 + Math.cos(angle) * 18, 125 + Math.sin(angle) * 12, 2.5 * t, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            },
            {
                text: "Add a top hat!",
                voice: "Draw a fancy top hat on the snowman's head!",
                draw(ctx, t) {
                    // hat brim
                    ctx.beginPath();
                    ctx.moveTo(220, 90);
                    ctx.lineTo(220 + 60 * t, 90);
                    ctx.stroke();
                    // hat top
                    ctx.beginPath();
                    ctx.rect(230, 90 - 40 * t, 40, 40 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw stick arms and buttons!",
                voice: "Add two stick arms and three buttons. Do you want to build a snowman?",
                draw(ctx, t) {
                    // left arm
                    ctx.beginPath();
                    ctx.moveTo(200, 185);
                    ctx.lineTo(200 - 50 * t, 160);
                    ctx.stroke();
                    // left hand twigs
                    ctx.beginPath();
                    ctx.moveTo(150, 160);
                    ctx.lineTo(140, 160 - 15 * t);
                    ctx.moveTo(150, 160);
                    ctx.lineTo(138, 160 - 5 * t);
                    ctx.stroke();
                    // right arm
                    ctx.beginPath();
                    ctx.moveTo(300, 185);
                    ctx.lineTo(300 + 50 * t, 160);
                    ctx.stroke();
                    // right hand twigs
                    ctx.beginPath();
                    ctx.moveTo(350, 160);
                    ctx.lineTo(360, 160 - 15 * t);
                    ctx.moveTo(350, 160);
                    ctx.lineTo(362, 160 - 5 * t);
                    ctx.stroke();
                    // buttons
                    ctx.beginPath();
                    ctx.arc(250, 175, 4 * t, 0, Math.PI * 2);
                    ctx.arc(250, 195, 4 * t, 0, Math.PI * 2);
                    ctx.arc(250, 215, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        ]
    }
];
