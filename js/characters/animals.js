export const animals = [
    {
        id: 'monkey',
        name: 'Monkey',
        emoji: '\u{1F412}',
        category: 'animals',
        steps: [
            {
                text: "Draw a circle face!",
                voice: "Let's draw a silly monkey! First, draw a nice round circle for his face.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 150, 70 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add two big round ears!",
                voice: "Monkeys have big ears to hear with. Draw two large circles on the sides of the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(175, 150, 25 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(325, 150, 25 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw an oval body!",
                voice: "Draw a big oval underneath the head for his tummy.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 280, 60 * t, 85 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a long curly tail!",
                voice: "Draw a long, wiggly line for a curly monkey tail. Boing!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(200, 300);
                    ctx.bezierCurveTo(150, 250, 100, 380, 80 * t, 320);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a smiling face!",
                voice: "Add two dots for eyes and a big happy smile!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(230, 140, 5 * t, 0, Math.PI * 2);
                    ctx.arc(270, 140, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 160, 20, 0.2 * Math.PI, (0.2 + 0.6 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the face light brown!", voice: "Pick the brown color and fill in the monkey's round face. Nice and smooth!", color: '#8B4513' },
            { text: "Paint the ears pink inside!", voice: "Use pink to color the inside of both ears.", color: '#FF6B81' },
            { text: "Color the body brown!", voice: "Use brown to fill in the monkey's tummy and body.", color: '#8B4513' },
            { text: "Paint the tail brown!", voice: "Color the curly tail brown to match the body.", color: '#8B4513' },
            { text: "Add black eyes!", voice: "Use black to fill in the eyes nice and dark.", color: '#2F3542' }
        ]
    },
    {
        id: 'elephant',
        name: 'Elephant',
        emoji: '\u{1F418}',
        category: 'animals',
        steps: [
            {
                text: "Draw a big oval tummy!",
                voice: "Draw a large oval for the elephant's big tummy.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 220, 100 * t, 80 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a round head!",
                voice: "Draw a circle for the head on the side.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(340, 180, 50 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a long trunk!",
                voice: "Draw a long wiggly line coming down for the trunk.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(380, 190);
                    ctx.quadraticCurveTo(420, 200, 400 * t, 280);
                    ctx.stroke();
                }
            },
            {
                text: "Add a big floppy ear!",
                voice: "Draw a giant C-shape for a big elephant ear.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(310, 180, 45 * t, 0.5 * Math.PI, 1.5 * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body grey-blue!", voice: "Pick the light blue color and fill in the elephant's big tummy.", color: '#70A1FF' },
            { text: "Paint the head grey-blue!", voice: "Use the same light blue to color the head.", color: '#70A1FF' },
            { text: "Color the trunk!", voice: "Paint the long trunk the same color.", color: '#70A1FF' },
            { text: "Paint the ear pink inside!", voice: "Use pink to color inside the big floppy ear.", color: '#FF6B81' }
        ]
    },
    {
        id: 'lion',
        name: 'Lion',
        emoji: '\u{1F981}',
        category: 'animals',
        steps: [
            {
                text: "Draw a circle face!",
                voice: "Draw a round circle for the lion's face.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 150, 70 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a bumpy mane!",
                voice: "Draw a big wiggly line all around the head for his fluffy hair.",
                draw(ctx, t) {
                    ctx.beginPath();
                    for (let i = 0; i < 12; i++) {
                        const a = (i / 12) * Math.PI * 2 * t;
                        const x = 250 + Math.cos(a) * 90;
                        const y = 150 + Math.sin(a) * 90;
                        ctx.arc(x, y, 25, 0, Math.PI * 2);
                    }
                    ctx.stroke();
                }
            },
            {
                text: "Add an oval body!",
                voice: "Draw a big oval under the mane for the lion's body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 290, 60 * t, 80 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a happy face!",
                voice: "Add two dots for eyes and a little nose and mouth.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(230, 140, 5 * t, 0, Math.PI * 2);
                    ctx.arc(270, 140, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 155, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 165, 15, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the mane orange!", voice: "Pick orange and fill in all the bumpy mane around the head. Make it fluffy!", color: '#FFA502' },
            { text: "Paint the face yellow!", voice: "Use yellow to color the lion's round face.", color: '#ECCC68' },
            { text: "Color the body yellow!", voice: "Paint the body the same golden yellow color.", color: '#ECCC68' },
            { text: "Add dark eyes and nose!", voice: "Use dark color to fill in the eyes and the little nose.", color: '#2F3542' }
        ]
    },
    {
        id: 'tiger',
        name: 'Tiger',
        emoji: '\u{1F42F}',
        category: 'animals',
        steps: [
            {
                text: "Draw a circle head!",
                voice: "Let's draw a tiger! Start with a nice round circle for the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 150, 80 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add two small ears!",
                voice: "Draw two small circles on top for the tiger's ears.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(190, 85, 20 * t, 0, Math.PI * 2);
                    ctx.arc(310, 85, 20 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw stripes on the face!",
                voice: "Tigers have stripes! Draw little shapes on the side of his face.",
                draw(ctx, t) {
                    for (let i = 0; i < 3; i++) {
                        const y = 120 + i * 25;
                        ctx.beginPath();
                        ctx.moveTo(175, y);
                        ctx.lineTo(195, y - 8 * t);
                        ctx.lineTo(195, y + 8 * t);
                        ctx.closePath();
                        ctx.fill();
                        ctx.beginPath();
                        ctx.moveTo(325, y);
                        ctx.lineTo(305, y - 8 * t);
                        ctx.lineTo(305, y + 8 * t);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            },
            {
                text: "Draw a big oval body!",
                voice: "Draw a big egg shape under the head for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 290, 70 * t, 90 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the head orange!", voice: "Pick orange and fill in the tiger's round head.", color: '#FFA502' },
            { text: "Paint the body orange!", voice: "Use the same orange to color the big body.", color: '#FFA502' },
            { text: "Color the stripes dark!", voice: "Use dark color to fill in all the stripe shapes on the face.", color: '#2F3542' },
            { text: "Paint the ears white inside!", voice: "Use white to add a little color inside each ear.", color: '#FFFFFF' }
        ]
    },
    {
        id: 'zebra',
        name: 'Zebra',
        emoji: '\u{1F993}',
        category: 'animals',
        steps: [
            {
                text: "Draw a long oval body!",
                voice: "Let's draw a zebra. Draw a long oval for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 250, 100 * t, 60 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a neck and head!",
                voice: "Draw a neck pointing up and a small oval for the face.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(310, 210);
                    ctx.lineTo(350 * t, 120);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(360, 110, 30 * t, 20 * t, 0.5, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw lots of stripes!",
                voice: "Zebras love stripes! Draw many straight lines all over the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        ctx.moveTo(160 + i * 25 * t, 200);
                        ctx.lineTo(160 + i * 25 * t, 300);
                    }
                    ctx.stroke();
                }
            },
            {
                text: "Add four legs!",
                voice: "Draw four lines going down for the zebra's legs.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(170, 300);
                    ctx.lineTo(170, 300 + 60 * t);
                    ctx.moveTo(210, 300);
                    ctx.lineTo(210, 300 + 60 * t);
                    ctx.moveTo(260, 300);
                    ctx.lineTo(260, 300 + 60 * t);
                    ctx.moveTo(290, 300);
                    ctx.lineTo(290, 300 + 60 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body white!", voice: "Pick white and fill in the zebra's body. Zebras are white with black stripes!", color: '#FFFFFF' },
            { text: "Paint the stripes black!", voice: "Use dark color to paint over all the stripes. Nice and bold!", color: '#2F3542' },
            { text: "Color the head white!", voice: "Paint the head and neck white.", color: '#FFFFFF' },
            { text: "Paint the legs dark!", voice: "Use dark color to color the bottom of the legs.", color: '#2F3542' }
        ]
    },
    {
        id: 'cat',
        name: 'Kitty Cat',
        emoji: '\u{1F431}',
        category: 'animals',
        steps: [
            {
                text: "Draw a round head!",
                voice: "Draw a circle for the kitty head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 150, 80 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add pointy ears!",
                voice: "Draw two triangles on top for ears.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(180, 95);
                    ctx.lineTo(175, 95 - 55 * t);
                    ctx.lineTo(210, 80);
                    ctx.moveTo(320, 95);
                    ctx.lineTo(325, 95 - 55 * t);
                    ctx.lineTo(290, 80);
                    ctx.stroke();
                }
            },
            {
                text: "Draw whiskers and a face!",
                voice: "Add two dots for eyes, a little nose, and long whiskers!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(225, 145, 6 * t, 0, Math.PI * 2);
                    ctx.arc(275, 145, 6 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 165, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // whiskers
                    ctx.beginPath();
                    ctx.moveTo(200, 165);
                    ctx.lineTo(200 - 40 * t, 160);
                    ctx.moveTo(200, 170);
                    ctx.lineTo(200 - 40 * t, 175);
                    ctx.moveTo(300, 165);
                    ctx.lineTo(300 + 40 * t, 160);
                    ctx.moveTo(300, 170);
                    ctx.lineTo(300 + 40 * t, 175);
                    ctx.stroke();
                }
            },
            {
                text: "Draw an oval body!",
                voice: "Draw an oval under the head for the kitty's body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 280, 50 * t, 70 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a curly tail!",
                voice: "Draw a curvy line for the cat's swishing tail!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(210, 310);
                    ctx.bezierCurveTo(170, 280, 130, 350 * t, 150, 290);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the head orange!", voice: "Pick orange and fill in the kitty's round head.", color: '#FFA502' },
            { text: "Paint the body orange!", voice: "Use the same orange to color the body.", color: '#FFA502' },
            { text: "Color the ears pink inside!", voice: "Use pink to add a little color inside each pointy ear.", color: '#FF6B81' },
            { text: "Paint the nose pink!", voice: "Color the little nose dot pink.", color: '#FF6B81' },
            { text: "Add dark eyes and whiskers!", voice: "Use dark color to fill in the eyes nice and bold.", color: '#2F3542' }
        ]
    },
    {
        id: 'dog',
        name: 'Puppy Dog',
        emoji: '\u{1F436}',
        category: 'animals',
        steps: [
            {
                text: "Draw a round head!",
                voice: "Let's draw a cute puppy! Start with a big round circle for the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 150, 75 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add two floppy ears!",
                voice: "Puppies have floppy ears! Draw two ovals hanging down on the sides.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(180, 170, 20 * t, 40 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(320, 170, 20 * t, 40 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a big oval body!",
                voice: "Draw a big oval underneath for the puppy's body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 290, 65 * t, 80 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a happy face!",
                voice: "Draw big eyes, a nose, and a happy tongue sticking out!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(225, 140, 7 * t, 0, Math.PI * 2);
                    ctx.arc(275, 140, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(250, 165, 8 * t, 6 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 175, 12, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                }
            },
            {
                text: "Add a wagging tail!",
                voice: "Draw a curvy tail wagging with happiness!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(300, 260);
                    ctx.bezierCurveTo(340, 240, 360 * t, 200, 340, 220);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the head brown!", voice: "Pick brown and fill in the puppy's round head.", color: '#8B4513' },
            { text: "Paint the ears darker!", voice: "Use dark color to fill in both floppy ears.", color: '#2F3542' },
            { text: "Color the body brown!", voice: "Use brown to fill in the big body.", color: '#8B4513' },
            { text: "Paint the nose black!", voice: "Color the nose nice and dark.", color: '#2F3542' },
            { text: "Add a pink tongue!", voice: "Use pink to add a little tongue. Panting puppy!", color: '#FF6B81' }
        ]
    },
    {
        id: 'fish',
        name: 'Fish',
        emoji: '\u{1F420}',
        category: 'animals',
        steps: [
            {
                text: "Draw a big oval!",
                voice: "Draw a big egg shape for the fish body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 200, 110 * t, 70 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a triangle tail!",
                voice: "Draw a triangle at the back for a tail.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(140, 200);
                    ctx.lineTo(140 - 70 * t, 150);
                    ctx.lineTo(140 - 70 * t, 250);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw an eye and mouth!",
                voice: "Add a big dot for the eye and a little smile!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(300, 190, 8 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(320, 205, 10, 0.3 * Math.PI, (0.3 + 0.4 * t) * Math.PI);
                    ctx.stroke();
                }
            },
            {
                text: "Add some scales!",
                voice: "Draw little curved lines on the body for scales!",
                draw(ctx, t) {
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.arc(210 + i * 30, 200, 15 * t, 0, Math.PI);
                        ctx.stroke();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the body blue!", voice: "Pick blue and fill in the fish's oval body. Splashy!", color: '#1E90FF' },
            { text: "Paint the tail orange!", voice: "Use orange to color the triangle tail.", color: '#FFA502' },
            { text: "Color the scales light blue!", voice: "Use light blue on the scale patterns.", color: '#70A1FF' },
            { text: "Add a dark eye!", voice: "Use dark color to fill in the eye nice and round.", color: '#2F3542' }
        ]
    },
    {
        id: 'snake',
        name: 'Snake',
        emoji: '\u{1F40D}',
        category: 'animals',
        steps: [
            {
                text: "Draw a wiggly body!",
                voice: "Draw a very long S shape for the snake.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(400, 100);
                    ctx.bezierCurveTo(200, 50, 300, 350 * t, 100, 300);
                    ctx.stroke();
                }
            },
            {
                text: "Add two tiny eyes!",
                voice: "Draw two little dots at the top for eyes.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(390, 95, 4 * t, 0, Math.PI * 2);
                    ctx.arc(410, 95, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw a forked tongue!",
                voice: "Add a little forked tongue sticking out. Ssssss!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(420, 100);
                    ctx.lineTo(420 + 20 * t, 95);
                    ctx.moveTo(420, 100);
                    ctx.lineTo(420 + 20 * t, 105);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body green!", voice: "Pick green and paint along the whole wiggly body. Ssssss!", color: '#2ED573' },
            { text: "Add lighter green spots!", voice: "Use light green to add some spots and patterns on the body.", color: '#7BED9F' },
            { text: "Paint the eyes dark!", voice: "Color the two tiny eyes nice and dark.", color: '#2F3542' },
            { text: "Color the tongue red!", voice: "Use red to paint the forked tongue. Ssssss!", color: '#FF4757' }
        ]
    },
    {
        id: 'penguin',
        name: 'Penguin',
        emoji: '\u{1F427}',
        category: 'animals',
        steps: [
            {
                text: "Draw an egg-shaped body!",
                voice: "Let's draw a penguin! Start with a big egg shape for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 220, 65 * t, 100 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add a round head!",
                voice: "Draw a circle on top for the penguin's head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 120, 45 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the tummy patch!",
                voice: "Penguins have a white tummy! Draw an oval in the middle of the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 235, 40 * t, 70 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add little flippers!",
                voice: "Draw two curved lines on the sides for flippers. Penguins love to swim!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(185, 210, 12 * t, 40 * t, -0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(315, 210, 12 * t, 40 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw eyes and a beak!",
                voice: "Add two round eyes and a little triangle beak!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(235, 115, 5 * t, 0, Math.PI * 2);
                    ctx.arc(265, 115, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(245, 130);
                    ctx.lineTo(250, 130 + 15 * t);
                    ctx.lineTo(255, 130);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add little feet!",
                voice: "Draw two flat ovals at the bottom for the penguin's feet. Waddle waddle!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 320, 18 * t, 8 * t, -0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(270, 320, 18 * t, 8 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body black!", voice: "Pick dark color and fill in the penguin's body. Leave the tummy white!", color: '#2F3542' },
            { text: "Keep the tummy white!", voice: "Use white to make sure the tummy patch is bright and clean.", color: '#FFFFFF' },
            { text: "Paint the beak orange!", voice: "Use orange to color the little triangle beak.", color: '#FFA502' },
            { text: "Color the feet orange!", voice: "Paint both flat feet orange. Waddle waddle!", color: '#FFA502' },
            { text: "Add dark eyes!", voice: "Use dark color to fill in the eyes.", color: '#2F3542' }
        ]
    },
    {
        id: 'owl',
        name: 'Owl',
        emoji: '\u{1F989}',
        category: 'animals',
        steps: [
            {
                text: "Draw a round body!",
                voice: "Let's draw a wise owl! Draw a big round circle for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 220, 70 * t, 90 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add two big eyes!",
                voice: "Owls have HUGE eyes! Draw two big circles near the top.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(225, 180, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(275, 180, 28 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // pupils
                    ctx.beginPath();
                    ctx.arc(225, 180, 10 * t, 0, Math.PI * 2);
                    ctx.arc(275, 180, 10 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add ear tufts!",
                voice: "Draw two little triangles on top for the ear tufts. Hoo hoo!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(210, 145);
                    ctx.lineTo(200, 145 - 40 * t);
                    ctx.lineTo(230, 140);
                    ctx.moveTo(290, 145);
                    ctx.lineTo(300, 145 - 40 * t);
                    ctx.lineTo(270, 140);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a small beak!",
                voice: "Add a little diamond shape in the middle for the beak.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(250, 195);
                    ctx.lineTo(244, 205 * t / t || 205);
                    ctx.lineTo(250, 195 + 18 * t);
                    ctx.lineTo(256, 205 * t / t || 205);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add wings and feet!",
                voice: "Draw curved wings on the sides and little claws at the bottom!",
                draw(ctx, t) {
                    // wings
                    ctx.beginPath();
                    ctx.ellipse(180, 230, 15 * t, 50 * t, -0.15, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(320, 230, 15 * t, 50 * t, 0.15, 0, Math.PI * 2);
                    ctx.stroke();
                    // feet
                    ctx.beginPath();
                    ctx.moveTo(230, 305);
                    ctx.lineTo(220, 305 + 15 * t);
                    ctx.moveTo(230, 305);
                    ctx.lineTo(230, 305 + 18 * t);
                    ctx.moveTo(230, 305);
                    ctx.lineTo(240, 305 + 15 * t);
                    ctx.moveTo(270, 305);
                    ctx.lineTo(260, 305 + 15 * t);
                    ctx.moveTo(270, 305);
                    ctx.lineTo(270, 305 + 18 * t);
                    ctx.moveTo(270, 305);
                    ctx.lineTo(280, 305 + 15 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the body brown!", voice: "Pick brown and fill in the owl's round body.", color: '#8B4513' },
            { text: "Paint the eyes yellow!", voice: "Use yellow to color the big eye circles around the pupils.", color: '#ECCC68' },
            { text: "Color the wings darker!", voice: "Use dark color on the wing shapes to make them stand out.", color: '#2F3542' },
            { text: "Paint the beak orange!", voice: "Color the little diamond beak orange.", color: '#FFA502' },
            { text: "Add dark ear tufts!", voice: "Use dark color on the pointy ear tufts on top. Hoo hoo!", color: '#2F3542' }
        ]
    },
    {
        id: 'butterfly',
        name: 'Butterfly',
        emoji: '\u{1F98B}',
        category: 'animals',
        steps: [
            {
                text: "Draw a thin body!",
                voice: "Let's draw a pretty butterfly! Start with a long thin oval for the body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 200, 8 * t, 60 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the top wings!",
                voice: "Draw two big round shapes on top for the upper wings. Make them big!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(195, 175, 55 * t, 45 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(305, 175, 55 * t, 45 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the bottom wings!",
                voice: "Add two smaller wings at the bottom. Butterflies have four wings!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(200, 230, 40 * t, 30 * t, 0.4, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(300, 230, 40 * t, 30 * t, -0.4, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add curly antennae!",
                voice: "Draw two curly lines coming up from the head for antennae!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(247, 142);
                    ctx.bezierCurveTo(240, 120, 220, 110 * t, 215, 105);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(253, 142);
                    ctx.bezierCurveTo(260, 120, 280, 110 * t, 285, 105);
                    ctx.stroke();
                    // dots on tips
                    ctx.beginPath();
                    ctx.arc(215, 105, 4 * t, 0, Math.PI * 2);
                    ctx.arc(285, 105, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add wing patterns!",
                voice: "Draw little circles on the wings for beautiful patterns!",
                draw(ctx, t) {
                    // top wing spots
                    ctx.beginPath();
                    ctx.arc(190, 170, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(310, 170, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // bottom wing spots
                    ctx.beginPath();
                    ctx.arc(200, 228, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(300, 228, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the top wings purple!", voice: "Pick purple and fill in both big top wings. So pretty!", color: '#A855F7' },
            { text: "Paint the bottom wings pink!", voice: "Use pink to color both smaller bottom wings.", color: '#FF6B81' },
            { text: "Color the body dark!", voice: "Use dark color to fill in the thin body.", color: '#2F3542' },
            { text: "Paint the wing spots yellow!", voice: "Use yellow to fill in the circle patterns on the wings!", color: '#ECCC68' },
            { text: "Color the antennae dark!", voice: "Use dark color on the curly antennae and their tips.", color: '#2F3542' }
        ]
    },
    {
        id: 'octopus',
        name: 'Octopus',
        emoji: '\u{1F419}',
        category: 'animals',
        steps: [
            {
                text: "Draw a big dome head!",
                voice: "Let's draw an octopus! Draw a big dome shape for the head.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(250, 160, 70 * t, Math.PI, 0);
                    ctx.stroke();
                    // bottom of head
                    ctx.beginPath();
                    ctx.moveTo(180, 160);
                    ctx.lineTo(180 + 140 * t, 160);
                    ctx.stroke();
                }
            },
            {
                text: "Draw a cute face!",
                voice: "Add two big eyes and a smiley mouth!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(225, 140, 8 * t, 0, Math.PI * 2);
                    ctx.arc(275, 140, 8 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 155, 10, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the first four tentacles!",
                voice: "Octopuses have eight arms! Let's draw the first four wiggly ones.",
                draw(ctx, t) {
                    // tentacle 1
                    ctx.beginPath();
                    ctx.moveTo(190, 160);
                    ctx.bezierCurveTo(170, 200, 140, 250 * t, 120, 280);
                    ctx.stroke();
                    // tentacle 2
                    ctx.beginPath();
                    ctx.moveTo(220, 160);
                    ctx.bezierCurveTo(210, 210, 190, 270 * t, 180, 300);
                    ctx.stroke();
                    // tentacle 3
                    ctx.beginPath();
                    ctx.moveTo(280, 160);
                    ctx.bezierCurveTo(290, 210, 310, 270 * t, 320, 300);
                    ctx.stroke();
                    // tentacle 4
                    ctx.beginPath();
                    ctx.moveTo(310, 160);
                    ctx.bezierCurveTo(330, 200, 360, 250 * t, 380, 280);
                    ctx.stroke();
                }
            },
            {
                text: "Draw four more curly tentacles!",
                voice: "Now four more wiggly tentacles in between. Squish squish!",
                draw(ctx, t) {
                    // tentacle 5
                    ctx.beginPath();
                    ctx.moveTo(195, 160);
                    ctx.bezierCurveTo(160, 220, 150, 280 * t, 145, 310);
                    ctx.stroke();
                    // tentacle 6
                    ctx.beginPath();
                    ctx.moveTo(240, 160);
                    ctx.bezierCurveTo(235, 220, 220, 290 * t, 230, 320);
                    ctx.stroke();
                    // tentacle 7
                    ctx.beginPath();
                    ctx.moveTo(260, 160);
                    ctx.bezierCurveTo(265, 220, 280, 290 * t, 270, 320);
                    ctx.stroke();
                    // tentacle 8
                    ctx.beginPath();
                    ctx.moveTo(305, 160);
                    ctx.bezierCurveTo(340, 220, 350, 280 * t, 355, 310);
                    ctx.stroke();
                }
            },
            {
                text: "Add suction cups!",
                voice: "Draw tiny circles on the tentacles for suction cups. So cool!",
                draw(ctx, t) {
                    const spots = [
                        [155, 240], [170, 270], [195, 250], [210, 280],
                        [300, 250], [315, 280], [345, 240], [355, 270]
                    ];
                    for (const [x, y] of spots) {
                        ctx.beginPath();
                        ctx.arc(x, y, 4 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the head purple!", voice: "Pick purple and fill in the big dome head.", color: '#A855F7' },
            { text: "Paint the tentacles purple!", voice: "Use the same purple to color all eight wiggly tentacles.", color: '#A855F7' },
            { text: "Add pink suction cups!", voice: "Use pink to color all the little suction cup circles.", color: '#FF6B81' },
            { text: "Paint dark eyes!", voice: "Use dark color to fill in the big eyes.", color: '#2F3542' },
            { text: "Add a lighter purple belly!", voice: "Use light purple on the bottom of the head for a lighter belly.", color: '#D580FF' }
        ]
    }
];
