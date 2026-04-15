export const cartoon = [
    {
        id: 'mario',
        name: 'Mario',
        emoji: '🍄',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Mario's round head!",
                voice: "It's-a me, Mario! Let's draw him! Start with a big round circle for his face!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 55 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add his iconic cap!",
                voice: "Mario always wears his red cap! Draw a half circle on top of his head with a big brim in front!",
                draw(ctx, t) {
                    // Cap dome
                    ctx.beginPath();
                    ctx.ellipse(250, 115, 58 * t, 30 * t, 0, Math.PI, 0);
                    ctx.stroke();
                    // Cap brim
                    ctx.beginPath();
                    ctx.ellipse(280, 118, 35 * t, 10 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    // M on cap
                    ctx.beginPath();
                    ctx.moveTo(240, 108);
                    ctx.lineTo(240, 108 - 12 * t);
                    ctx.lineTo(248, 108 - 5 * t);
                    ctx.lineTo(256, 108 - 12 * t);
                    ctx.lineTo(256, 108);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his round body with overalls!",
                voice: "Mario has a round tummy with blue overalls! Draw a big oval for the body and two straps!",
                draw(ctx, t) {
                    // Body
                    ctx.beginPath();
                    ctx.ellipse(250, 270, 55 * t, 65 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Overall straps
                    ctx.beginPath();
                    ctx.moveTo(220, 220);
                    ctx.lineTo(220, 220 + 30 * t);
                    ctx.moveTo(280, 220);
                    ctx.lineTo(280, 220 + 30 * t);
                    ctx.stroke();
                    // Overall bib line
                    ctx.beginPath();
                    ctx.moveTo(220, 250);
                    ctx.lineTo(220 + 60 * t, 250);
                    ctx.stroke();
                    // Buttons on straps
                    ctx.beginPath();
                    ctx.arc(220, 252, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(280, 252, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add arms and legs with big shoes!",
                voice: "Draw two arms on the sides with round gloves, and two short legs with really big shoes!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(195, 255);
                    ctx.bezierCurveTo(170, 260, 155, 280, 160, 290 * t + 10);
                    ctx.stroke();
                    // Left glove
                    ctx.beginPath();
                    ctx.arc(158, 295, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(305, 255);
                    ctx.bezierCurveTo(330, 260, 345, 280, 340, 290 * t + 10);
                    ctx.stroke();
                    // Right glove
                    ctx.beginPath();
                    ctx.arc(342, 295, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(225, 330);
                    ctx.lineTo(220, 330 + 25 * t);
                    ctx.stroke();
                    // Left shoe
                    ctx.beginPath();
                    ctx.ellipse(210, 360, 22 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(275, 330);
                    ctx.lineTo(280, 330 + 25 * t);
                    ctx.stroke();
                    // Right shoe
                    ctx.beginPath();
                    ctx.ellipse(290, 360, 22 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his face — mustache, eyes and big nose!",
                voice: "Mario has a big bushy mustache, round eyes, and his famous big round nose! Let's finish his face!",
                draw(ctx, t) {
                    // Eyes
                    ctx.beginPath();
                    ctx.ellipse(238, 142, 7 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(268, 142, 7 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Big round nose
                    ctx.beginPath();
                    ctx.ellipse(253, 158, 12 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Bushy mustache
                    ctx.beginPath();
                    ctx.moveTo(225, 170);
                    ctx.bezierCurveTo(230, 170 + 15 * t, 250, 170 + 18 * t, 253, 170);
                    ctx.bezierCurveTo(256, 170 + 18 * t, 270, 170 + 15 * t, 280, 170);
                    ctx.stroke();
                    // Mouth
                    ctx.beginPath();
                    ctx.arc(253, 180, 10, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                    // Ears
                    ctx.beginPath();
                    ctx.arc(195, 148, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(305, 148, 8 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the cap and shirt red!", voice: "Mario's cap is bright red! Paint the cap and the shirt area red!", color: '#E53935' },
            { text: "Paint the overalls blue!", voice: "His overalls are blue! Fill in the big overall area with blue!", color: '#1E88E5' },
            { text: "Color the face and arms skin tone!", voice: "Use a warm skin color for Mario's face and arms!", color: '#FFCC80' },
            { text: "Paint the shoes brown!", voice: "Mario wears big brown shoes! Color them in!", color: '#6D4C41' },
            { text: "Color the gloves white!", voice: "Don't forget Mario's white gloves!", color: '#FFFFFF' }
        ]
    },
    {
        id: 'luigi',
        name: 'Luigi',
        emoji: '🟢',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Luigi's taller head!",
                voice: "Let's draw Luigi! He's taller and thinner than Mario. Draw an oval for his face — taller than it is wide!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 140, 48 * t, 55 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add his green cap with an L!",
                voice: "Luigi wears a green cap just like Mario's but with an L on it! Draw it on top of his head!",
                draw(ctx, t) {
                    // Cap dome
                    ctx.beginPath();
                    ctx.ellipse(250, 100, 52 * t, 28 * t, 0, Math.PI, 0);
                    ctx.stroke();
                    // Cap brim
                    ctx.beginPath();
                    ctx.ellipse(278, 103, 32 * t, 9 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    // L on cap
                    ctx.beginPath();
                    ctx.moveTo(243, 82);
                    ctx.lineTo(243, 82 + 16 * t);
                    ctx.lineTo(243 + 12 * t, 82 + 16 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his taller body with overalls!",
                voice: "Luigi is taller than Mario! Draw a longer oval body with overalls and straps.",
                draw(ctx, t) {
                    // Body — taller and slimmer
                    ctx.beginPath();
                    ctx.ellipse(250, 270, 48 * t, 72 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Strap lines
                    ctx.beginPath();
                    ctx.moveTo(222, 215);
                    ctx.lineTo(222, 215 + 30 * t);
                    ctx.moveTo(278, 215);
                    ctx.lineTo(278, 215 + 30 * t);
                    ctx.stroke();
                    // Bib line
                    ctx.beginPath();
                    ctx.moveTo(222, 245);
                    ctx.lineTo(222 + 56 * t, 245);
                    ctx.stroke();
                    // Buttons
                    ctx.beginPath();
                    ctx.arc(222, 247, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(278, 247, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add longer arms and legs!",
                voice: "Luigi has longer arms and legs than Mario! Draw them with round gloves and big shoes!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(202, 250);
                    ctx.bezierCurveTo(175, 258, 155, 282, 155, 300 * t + 5);
                    ctx.stroke();
                    // Left glove
                    ctx.beginPath();
                    ctx.arc(153, 308, 11 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(298, 250);
                    ctx.bezierCurveTo(325, 258, 345, 282, 345, 300 * t + 5);
                    ctx.stroke();
                    // Right glove
                    ctx.beginPath();
                    ctx.arc(347, 308, 11 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left leg (longer)
                    ctx.beginPath();
                    ctx.moveTo(228, 338);
                    ctx.lineTo(222, 338 + 30 * t);
                    ctx.stroke();
                    // Left shoe
                    ctx.beginPath();
                    ctx.ellipse(212, 372, 20 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(272, 338);
                    ctx.lineTo(278, 338 + 30 * t);
                    ctx.stroke();
                    // Right shoe
                    ctx.beginPath();
                    ctx.ellipse(288, 372, 20 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his face — thinner mustache and eyes!",
                voice: "Luigi has a thinner mustache than Mario, and the same big nose! Finish his friendly face!",
                draw(ctx, t) {
                    // Eyes
                    ctx.beginPath();
                    ctx.ellipse(236, 132, 6 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(264, 132, 6 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Big nose
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 11 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Thinner mustache
                    ctx.beginPath();
                    ctx.moveTo(228, 163);
                    ctx.bezierCurveTo(235, 163 + 10 * t, 248, 163 + 12 * t, 250, 163);
                    ctx.bezierCurveTo(252, 163 + 12 * t, 265, 163 + 10 * t, 275, 163);
                    ctx.stroke();
                    // Mouth
                    ctx.beginPath();
                    ctx.arc(250, 172, 9, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                    // Ears
                    ctx.beginPath();
                    ctx.arc(202, 140, 7 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(298, 140, 7 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the cap and shirt green!", voice: "Luigi's cap is green — his favorite color! Paint the cap and shirt green!", color: '#43A047' },
            { text: "Paint the overalls blue!", voice: "Just like Mario, Luigi wears blue overalls! Fill them in!", color: '#1E88E5' },
            { text: "Color the face skin tone!", voice: "Use a warm skin color for Luigi's face and arms!", color: '#FFCC80' },
            { text: "Paint the shoes brown!", voice: "Color Luigi's big shoes brown!", color: '#6D4C41' },
            { text: "Color the gloves white!", voice: "Luigi wears white gloves too! Paint them white!", color: '#FFFFFF' }
        ]
    },
    {
        id: 'princess',
        name: 'Princess Peach',
        emoji: '👸',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Princess Peach's round face!",
                voice: "Let's draw Princess Peach! Start with a smooth round circle for her pretty face!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 130, 45 * t, 48 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add her crown and flowing hair!",
                voice: "Peach wears a beautiful golden crown! Draw it on top with flowing hair on the sides!",
                draw(ctx, t) {
                    // Crown base
                    ctx.beginPath();
                    ctx.rect(225, 80 - 5 * t, 50 * t, 15 * t);
                    ctx.stroke();
                    // Crown points
                    ctx.beginPath();
                    ctx.moveTo(228, 80);
                    ctx.lineTo(235, 80 - 20 * t);
                    ctx.lineTo(242, 80);
                    ctx.moveTo(242, 80);
                    ctx.lineTo(250, 80 - 25 * t);
                    ctx.lineTo(258, 80);
                    ctx.moveTo(258, 80);
                    ctx.lineTo(265, 80 - 20 * t);
                    ctx.lineTo(272, 80);
                    ctx.stroke();
                    // Crown jewel (center)
                    ctx.beginPath();
                    ctx.arc(250, 85, 4 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hair — left side flowing down
                    ctx.beginPath();
                    ctx.moveTo(208, 115);
                    ctx.bezierCurveTo(195, 140, 190, 180 * t + 30, 200, 220 * t + 10);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(205, 120);
                    ctx.bezierCurveTo(188, 150, 185, 190 * t + 20, 195, 230 * t + 5);
                    ctx.stroke();
                    // Hair — right side
                    ctx.beginPath();
                    ctx.moveTo(292, 115);
                    ctx.bezierCurveTo(305, 140, 310, 180 * t + 30, 300, 220 * t + 10);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(295, 120);
                    ctx.bezierCurveTo(312, 150, 315, 190 * t + 20, 305, 230 * t + 5);
                    ctx.stroke();
                }
            },
            {
                text: "Draw her big puffy dress!",
                voice: "Princess Peach has the most beautiful puffy dress! Draw a big bell shape going all the way down!",
                draw(ctx, t) {
                    // Dress — bell/triangle shape
                    ctx.beginPath();
                    ctx.moveTo(230, 178);
                    ctx.bezierCurveTo(225, 200, 170 + 10 * (1 - t), 320 * t + 30, 155, 375 * t + 10);
                    ctx.lineTo(345, 375 * t + 10);
                    ctx.bezierCurveTo(330 - 10 * (1 - t), 320 * t + 30, 275, 200, 270, 178);
                    ctx.stroke();
                    // Waist line
                    ctx.beginPath();
                    ctx.moveTo(225, 195);
                    ctx.lineTo(225 + 50 * t, 195);
                    ctx.stroke();
                    // Dress ruffle at bottom
                    ctx.beginPath();
                    ctx.moveTo(155, 380);
                    ctx.bezierCurveTo(190, 375 - 8 * t, 220, 375 + 5 * t, 250, 375 - 5 * t);
                    ctx.bezierCurveTo(280, 375 + 5 * t, 310, 375 - 8 * t, 345, 380);
                    ctx.stroke();
                }
            },
            {
                text: "Add her arms with gloves!",
                voice: "Draw her arms coming out of the dress with long elegant gloves!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(215, 200);
                    ctx.bezierCurveTo(190, 215, 175, 240, 172, 255 * t + 10);
                    ctx.stroke();
                    // Left glove
                    ctx.beginPath();
                    ctx.ellipse(170, 268, 10 * t, 8 * t, 0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(285, 200);
                    ctx.bezierCurveTo(310, 215, 325, 240, 328, 255 * t + 10);
                    ctx.stroke();
                    // Right glove
                    ctx.beginPath();
                    ctx.ellipse(330, 268, 10 * t, 8 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Earrings
                    ctx.beginPath();
                    ctx.arc(205, 145, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(295, 145, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw her pretty face — big eyes and smile!",
                voice: "Give Princess Peach big beautiful eyes, a tiny nose, and a sweet smile!",
                draw(ctx, t) {
                    // Big eyes with lashes
                    ctx.beginPath();
                    ctx.ellipse(237, 125, 8 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(237, 125, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(263, 125, 8 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(263, 125, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Eyelashes
                    ctx.beginPath();
                    ctx.moveTo(230, 117);
                    ctx.lineTo(228, 117 - 5 * t);
                    ctx.moveTo(237, 115);
                    ctx.lineTo(237, 115 - 6 * t);
                    ctx.moveTo(263, 115);
                    ctx.lineTo(263, 115 - 6 * t);
                    ctx.moveTo(270, 117);
                    ctx.lineTo(272, 117 - 5 * t);
                    ctx.stroke();
                    // Small nose
                    ctx.beginPath();
                    ctx.arc(250, 138, 3 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Sweet smile
                    ctx.beginPath();
                    ctx.arc(250, 142, 12, 0.15 * Math.PI, (0.15 + 0.7 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the dress pink!", voice: "Princess Peach's dress is beautiful pink! Fill in the whole big dress!", color: '#F48FB1' },
            { text: "Paint her hair blonde!", voice: "Peach has long golden blonde hair! Color it in!", color: '#FFD54F' },
            { text: "Color the crown gold!", voice: "Paint her royal crown shiny gold!", color: '#FFC107' },
            { text: "Paint her face skin tone!", voice: "Use a warm skin color for her pretty face and arms!", color: '#FFCC80' },
            { text: "Add blue eyes!", voice: "Princess Peach has beautiful blue eyes! Color them in!", color: '#42A5F5' }
        ]
    },
    {
        id: 'bowser',
        name: 'Bowser',
        emoji: '🐢',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Bowser's big angular head!",
                voice: "Let's draw the mighty Bowser! Start with a big wide head — he's one tough villain!",
                draw(ctx, t) {
                    // Big angular head
                    ctx.beginPath();
                    ctx.ellipse(250, 120, 60 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Snout/muzzle — wider and more pronounced
                    ctx.beginPath();
                    ctx.ellipse(250, 145, 35 * t, 22 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Horns
                    ctx.beginPath();
                    ctx.moveTo(205, 85);
                    ctx.lineTo(185, 85 - 35 * t);
                    ctx.lineTo(215, 85 - 5 * t);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(295, 85);
                    ctx.lineTo(315, 85 - 35 * t);
                    ctx.lineTo(285, 85 - 5 * t);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw his big spiky shell!",
                voice: "Bowser has a huge shell covered in spikes! Draw a big dome shape with pointy triangles on top!",
                draw(ctx, t) {
                    // Shell dome
                    ctx.beginPath();
                    ctx.ellipse(250, 250, 80 * t, 55 * t, 0, Math.PI, 0);
                    ctx.stroke();
                    // Shell bottom
                    ctx.beginPath();
                    ctx.moveTo(170, 250);
                    ctx.lineTo(170 + 160 * t, 250);
                    ctx.stroke();
                    // Spikes on shell
                    ctx.beginPath();
                    ctx.moveTo(200, 210);
                    ctx.lineTo(200, 210 - 25 * t);
                    ctx.lineTo(215, 210);
                    ctx.moveTo(240, 200);
                    ctx.lineTo(245, 200 - 30 * t);
                    ctx.lineTo(255, 200);
                    ctx.moveTo(285, 210);
                    ctx.lineTo(290, 210 - 25 * t);
                    ctx.lineTo(300, 210);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his big muscular body!",
                voice: "Bowser is super strong! Draw his big round belly under the shell!",
                draw(ctx, t) {
                    // Big belly
                    ctx.beginPath();
                    ctx.ellipse(250, 300, 65 * t, 55 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Belly segments (horizontal lines)
                    ctx.beginPath();
                    ctx.moveTo(210, 280);
                    ctx.lineTo(210 + 80 * t, 280);
                    ctx.moveTo(205, 300);
                    ctx.lineTo(205 + 90 * t, 300);
                    ctx.moveTo(210, 320);
                    ctx.lineTo(210 + 80 * t, 320);
                    ctx.stroke();
                    // Neck
                    ctx.beginPath();
                    ctx.moveTo(220, 165);
                    ctx.lineTo(215, 165 + 25 * t);
                    ctx.moveTo(280, 165);
                    ctx.lineTo(285, 165 + 25 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add big arms with claws and strong legs!",
                voice: "Bowser has huge muscular arms with sharp claws! Draw them with his thick legs!",
                draw(ctx, t) {
                    // Left arm — thick
                    ctx.beginPath();
                    ctx.moveTo(185, 260);
                    ctx.bezierCurveTo(155, 265, 135, 280, 130, 300 * t + 5);
                    ctx.stroke();
                    // Left claws
                    ctx.beginPath();
                    ctx.moveTo(130, 305);
                    ctx.lineTo(120, 305 + 12 * t);
                    ctx.moveTo(135, 308);
                    ctx.lineTo(128, 308 + 14 * t);
                    ctx.moveTo(140, 308);
                    ctx.lineTo(136, 308 + 12 * t);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(315, 260);
                    ctx.bezierCurveTo(345, 265, 365, 280, 370, 300 * t + 5);
                    ctx.stroke();
                    // Right claws
                    ctx.beginPath();
                    ctx.moveTo(370, 305);
                    ctx.lineTo(380, 305 + 12 * t);
                    ctx.moveTo(365, 308);
                    ctx.lineTo(372, 308 + 14 * t);
                    ctx.moveTo(360, 308);
                    ctx.lineTo(364, 308 + 12 * t);
                    ctx.stroke();
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(215, 350);
                    ctx.lineTo(205, 350 + 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(198, 383, 18 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(285, 350);
                    ctx.lineTo(295, 350 + 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(302, 383, 18 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his angry face with fangs!",
                voice: "Give Bowser his fierce angry eyes, a big nose, and scary fangs! ROARRR!",
                draw(ctx, t) {
                    // Angry eyes
                    ctx.beginPath();
                    ctx.ellipse(232, 112, 10 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(232, 112, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(268, 112, 10 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(268, 112, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Angry eyebrows — V shape
                    ctx.beginPath();
                    ctx.moveTo(218, 105);
                    ctx.lineTo(232, 102 + 5 * t);
                    ctx.moveTo(282, 105);
                    ctx.lineTo(268, 102 + 5 * t);
                    ctx.stroke();
                    // Big nose
                    ctx.beginPath();
                    ctx.ellipse(250, 135, 10 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Mouth with fangs
                    ctx.beginPath();
                    ctx.arc(250, 152, 22, 0, Math.PI * t);
                    ctx.stroke();
                    // Fangs
                    ctx.beginPath();
                    ctx.moveTo(232, 152);
                    ctx.lineTo(232, 152 + 10 * t);
                    ctx.lineTo(238, 152);
                    ctx.moveTo(268, 152);
                    ctx.lineTo(268, 152 + 10 * t);
                    ctx.lineTo(262, 152);
                    ctx.stroke();
                    // Spiky red hair/eyebrows (hair tufts)
                    ctx.beginPath();
                    ctx.moveTo(220, 80);
                    ctx.lineTo(215, 80 - 15 * t);
                    ctx.moveTo(250, 72);
                    ctx.lineTo(250, 72 - 18 * t);
                    ctx.moveTo(280, 80);
                    ctx.lineTo(285, 80 - 15 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color Bowser's body green!", voice: "Bowser is green like a big scary turtle! Paint his body and head green!", color: '#4CAF50' },
            { text: "Paint his belly yellow!", voice: "His belly is bright yellow with those cool segments! Fill it in!", color: '#FFEB3B' },
            { text: "Color the shell brown!", voice: "Paint the big shell a dark brown color!", color: '#795548' },
            { text: "Paint the spikes and horns white!", voice: "The spikes and horns are white — color them in!", color: '#F5F5F5' },
            { text: "Add red hair and eyebrows!", voice: "Bowser has wild red hair! Paint the spiky hair tufts red!", color: '#E53935' }
        ]
    }
];
