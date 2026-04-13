export const vehicles = [
    {
        id: 'police',
        name: 'Police Car',
        emoji: '\u{1F694}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the car body!",
                voice: "Draw a long rectangle for the police car.",
                draw(ctx, t) {
                    ctx.beginPath();
                    roundRect(ctx, 100, 220, 300 * t, 60, 10);
                    ctx.stroke();
                }
            },
            {
                text: "Add the roof!",
                voice: "Draw a smaller box on top for the roof.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(150, 220);
                    ctx.lineTo(150 + 40 * t, 220 - 60 * t);
                    ctx.lineTo(150 + 160 * t, 220 - 60 * t);
                    ctx.lineTo(150 + 200 * t, 220);
                    ctx.stroke();
                }
            },
            {
                text: "Add two wheels!",
                voice: "Draw two circles at the bottom.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(160, 280, 25 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(340, 280, 25 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the siren!",
                voice: "Draw a little box on top for the siren. Woo-woo!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(235, 145, 30 * t, 15);
                    ctx.stroke();
                }
            },
            {
                text: "Draw windows!",
                voice: "Add two squares for the front and back windows.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(165, 170, 55 * t, 40 * t);
                    ctx.rect(270, 170, 55 * t, 40 * t);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'bus',
        name: 'School Bus',
        emoji: '\u{1F68C}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw a big rectangle!",
                voice: "Draw a big long rectangle for the school bus body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    roundRect(ctx, 70, 180, 360 * t, 100, 8);
                    ctx.stroke();
                }
            },
            {
                text: "Add the roof!",
                voice: "Draw a line across the top for the roof.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(70, 180);
                    ctx.lineTo(70, 180 - 20 * t);
                    ctx.lineTo(430, 180 - 20 * t);
                    ctx.lineTo(430, 180);
                    ctx.stroke();
                }
            },
            {
                text: "Draw windows!",
                voice: "Draw a row of little squares for the windows. Kids are inside!",
                draw(ctx, t) {
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.rect(100 + i * 60, 195, 35 * t, 30 * t);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add two big wheels!",
                voice: "Draw two big circles at the bottom for wheels.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(140, 280, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(360, 280, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the door!",
                voice: "Draw a rectangle at the front for the door.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(395, 200, 25 * t, 60 * t);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'truck',
        name: 'Big Truck',
        emoji: '\u{1F69A}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the cab!",
                voice: "Draw a small rectangle for the front cab where the driver sits.",
                draw(ctx, t) {
                    ctx.beginPath();
                    roundRect(ctx, 300, 180, 100 * t, 90, 6);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the cargo box!",
                voice: "Draw a big rectangle behind the cab. This is where things are carried!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(80, 150, 220 * t, 120 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add wheels!",
                voice: "Draw three circles at the bottom for the wheels. Trucks need lots of wheels!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(140, 280, 24 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(260, 280, 24 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(370, 280, 24 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a window and headlight!",
                voice: "Draw a square window on the cab and a little circle for the headlight.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(320, 195, 50 * t, 35 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(400, 245, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        ]
    },
    {
        id: 'racecar',
        name: 'Race Car',
        emoji: '\u{1F3CE}\u{FE0F}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw a sleek low body!",
                voice: "Race cars are low and fast! Draw a long flat shape for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(100, 240);
                    ctx.lineTo(100 + 50 * t, 240 - 40 * t);
                    ctx.lineTo(100 + 200 * t, 240 - 40 * t);
                    ctx.lineTo(100 + 300 * t, 240);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add two big wheels!",
                voice: "Draw two big circles for the racing wheels.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(170, 250, 25 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(350, 250, 25 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a driver window!",
                voice: "Draw a small bump for the cockpit where the driver sits.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(220, 200);
                    ctx.lineTo(230, 200 - 25 * t);
                    ctx.lineTo(280, 200 - 25 * t);
                    ctx.lineTo(290, 200);
                    ctx.stroke();
                }
            },
            {
                text: "Add a spoiler!",
                voice: "Draw a big wing at the back. Zoom zoom!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(380, 240);
                    ctx.lineTo(390, 240 - 50 * t);
                    ctx.lineTo(420, 240 - 50 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(400, 190);
                    ctx.lineTo(430 * t, 190);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a racing number!",
                voice: "Write a big number one on the side. You're number one!",
                draw(ctx, t) {
                    ctx.font = `bold ${30 * t}px Nunito, sans-serif`;
                    ctx.fillText("1", 245, 230);
                }
            }
        ]
    },
    {
        id: 'helicopter',
        name: 'Helicopter',
        emoji: '\u{1F681}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw an oval body!",
                voice: "Let's draw a helicopter! Start with a big oval for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 220, 90 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the tail boom!",
                voice: "Draw a long line going to the right with a little tail piece at the end.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(340, 210);
                    ctx.lineTo(340 + 80 * t, 195);
                    ctx.stroke();
                    // tail fin
                    ctx.beginPath();
                    ctx.moveTo(420, 195);
                    ctx.lineTo(420, 195 - 30 * t);
                    ctx.lineTo(430, 195 - 15 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big rotor!",
                voice: "Draw a long straight line on top for the spinning rotor blades!",
                draw(ctx, t) {
                    // rotor mast
                    ctx.beginPath();
                    ctx.moveTo(250, 170);
                    ctx.lineTo(250, 155);
                    ctx.stroke();
                    // blades
                    ctx.beginPath();
                    ctx.moveTo(250 - 120 * t, 155);
                    ctx.lineTo(250 + 120 * t, 155);
                    ctx.stroke();
                    // center dot
                    ctx.beginPath();
                    ctx.arc(250, 155, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add a window!",
                voice: "Draw a big curved window at the front so the pilot can see!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(210, 210, 30 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the landing skids!",
                voice: "Draw two lines at the bottom for the landing skids. Chop chop chop!",
                draw(ctx, t) {
                    // left support
                    ctx.beginPath();
                    ctx.moveTo(210, 268);
                    ctx.lineTo(210, 268 + 20 * t);
                    ctx.stroke();
                    // right support
                    ctx.beginPath();
                    ctx.moveTo(290, 268);
                    ctx.lineTo(290, 268 + 20 * t);
                    ctx.stroke();
                    // skid bar
                    ctx.beginPath();
                    ctx.moveTo(180, 288);
                    ctx.lineTo(180 + 140 * t, 288);
                    ctx.stroke();
                }
            }
        ]
    },
    {
        id: 'pirateship',
        name: 'Pirate Ship',
        emoji: '\u{1F3F4}\u{200D}\u{2620}\u{FE0F}',
        category: 'vehicles',
        steps: [
            {
                text: "Draw the hull!",
                voice: "Ahoy! Let's draw a pirate ship! Start with a big curved hull shape.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(100, 260);
                    ctx.lineTo(80, 260 + 40 * t);
                    ctx.lineTo(420, 260 + 40 * t);
                    ctx.lineTo(400, 260);
                    ctx.stroke();
                    // curved bottom
                    ctx.beginPath();
                    ctx.moveTo(80, 300);
                    ctx.quadraticCurveTo(250, 300 + 30 * t, 420, 300);
                    ctx.stroke();
                }
            },
            {
                text: "Add a tall mast!",
                voice: "Draw a tall straight line going up for the mast!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(250, 260);
                    ctx.lineTo(250, 260 - 180 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big sail!",
                voice: "Draw a big billowing rectangle for the sail. The wind is blowing!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(255, 100);
                    ctx.quadraticCurveTo(320, 100 + 50 * t, 350, 130);
                    ctx.lineTo(350, 220 * t + 30);
                    ctx.quadraticCurveTo(300, 220 + 20 * t, 255, 240);
                    ctx.stroke();
                }
            },
            {
                text: "Add a pirate flag!",
                voice: "Draw a little flag at the very top of the mast. Skull and crossbones!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(250, 80);
                    ctx.lineTo(250 + 35 * t, 80);
                    ctx.lineTo(250 + 35 * t, 80 + 25 * t);
                    ctx.lineTo(250, 80 + 25 * t);
                    ctx.closePath();
                    ctx.stroke();
                    // skull (simple X)
                    ctx.beginPath();
                    ctx.moveTo(260, 87);
                    ctx.lineTo(260 + 14 * t, 87 + 12 * t);
                    ctx.moveTo(260 + 14 * t, 87);
                    ctx.lineTo(260, 87 + 12 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw portholes!",
                voice: "Add little circles on the hull for portholes. Cannon balls inside!",
                draw(ctx, t) {
                    for (let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.arc(150 + i * 50, 280, 8 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add waves!",
                voice: "Draw wiggly lines at the bottom for ocean waves. Yo ho ho!",
                draw(ctx, t) {
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const x = 50 + i * 75;
                        ctx.moveTo(x, 340);
                        ctx.quadraticCurveTo(x + 20, 340 - 15 * t, x + 37, 340);
                        ctx.quadraticCurveTo(x + 55, 340 + 15 * t, x + 75, 340);
                    }
                    ctx.stroke();
                }
            }
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
