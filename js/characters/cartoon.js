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
    },
    {
        id: 'goomba',
        name: 'Goomba',
        emoji: '👾',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Goomba's big mushroom body!",
                voice: "Let's draw a Goomba! He's Bowser's trusty foot soldier, shaped like a shiitake mushroom! Draw a big wide mushroom shape!",
                draw(ctx, t) {
                    // Main mushroom-shaped body — wider at top, slightly tapered at bottom
                    ctx.beginPath();
                    ctx.moveTo(250 - 100 * t, 210);
                    ctx.bezierCurveTo(250 - 110 * t, 120, 250 - 70 * t, 100, 250, 100 + 5 * (1 - t));
                    ctx.bezierCurveTo(250 + 70 * t, 100, 250 + 110 * t, 120, 250 + 100 * t, 210);
                    ctx.bezierCurveTo(250 + 85 * t, 270, 250 + 55 * t, 295, 250, 295 - 5 * (1 - t));
                    ctx.bezierCurveTo(250 - 55 * t, 295, 250 - 85 * t, 270, 250 - 100 * t, 210);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the line separating cap and face!",
                voice: "Draw a curvy line across the middle — that's where the mushroom cap meets his face!",
                draw(ctx, t) {
                    const w = 100 * t;
                    ctx.beginPath();
                    ctx.moveTo(250 - w, 210);
                    ctx.bezierCurveTo(250 - w * 0.5, 230, 250 + w * 0.5, 230, 250 + w, 210);
                    ctx.stroke();
                }
            },
            {
                text: "Add two little feet at the bottom!",
                voice: "Goombas have two tiny feet that peek out below! Draw two small ovals!",
                draw(ctx, t) {
                    // Left foot
                    ctx.beginPath();
                    ctx.ellipse(215, 310, 28 * t, 13 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right foot
                    ctx.beginPath();
                    ctx.ellipse(285, 310, 28 * t, 13 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his bushy, angry eyebrows!",
                voice: "Goombas have big bushy eyebrows that make them look grumpy! Draw two thick angled brows!",
                draw(ctx, t) {
                    // Left eyebrow — thick angry slope
                    ctx.beginPath();
                    ctx.moveTo(195, 160);
                    ctx.bezierCurveTo(210, 160 - 10 * t, 235, 170 - 3 * t, 245, 185);
                    ctx.bezierCurveTo(235, 178, 215, 175 + 3 * t, 195, 175);
                    ctx.closePath();
                    ctx.stroke();
                    // Right eyebrow
                    ctx.beginPath();
                    ctx.moveTo(305, 160);
                    ctx.bezierCurveTo(290, 160 - 10 * t, 265, 170 - 3 * t, 255, 185);
                    ctx.bezierCurveTo(265, 178, 285, 175 + 3 * t, 305, 175);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw his eyes and two pointy fangs!",
                voice: "Give him two round eyes under those brows, and two little fangs poking up from his frown!",
                draw(ctx, t) {
                    // Left eye
                    ctx.beginPath();
                    ctx.ellipse(225, 195, 9 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(225, 195, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Right eye
                    ctx.beginPath();
                    ctx.ellipse(275, 195, 9 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(275, 195, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Frown mouth
                    ctx.beginPath();
                    ctx.arc(250, 260, 22, Math.PI + 0.2, Math.PI * 2 - 0.2 * t);
                    ctx.stroke();
                    // Left fang
                    ctx.beginPath();
                    ctx.moveTo(240, 245);
                    ctx.lineTo(240, 245 + 12 * t);
                    ctx.lineTo(246, 245);
                    ctx.closePath();
                    ctx.stroke();
                    // Right fang
                    ctx.beginPath();
                    ctx.moveTo(260, 245);
                    ctx.lineTo(260, 245 + 12 * t);
                    ctx.lineTo(254, 245);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color Goomba's mushroom cap brown!", voice: "Goombas are a warm chestnut brown — paint his whole mushroom body brown!", color: '#8D5524' },
            { text: "Paint his face a lighter tan!", voice: "The face area below the line is a lighter tan color!", color: '#E0A878' },
            { text: "Color his feet dark brown!", voice: "His little feet are a darker brown!", color: '#4E342E' },
            { text: "Make the fangs white!", voice: "Paint his two sharp fangs white!", color: '#FFFFFF' },
            { text: "Color his eyebrows black!", voice: "Those bushy eyebrows are jet black!", color: '#212121' }
        ]
    },
    {
        id: 'koopa',
        name: 'Koopa Troopa',
        emoji: '🐢',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Koopa's round head!",
                voice: "Let's draw a Koopa Troopa — one of Bowser's shell-shelled soldiers! Start with a round head!",
                draw(ctx, t) {
                    // Head
                    ctx.beginPath();
                    ctx.ellipse(250, 130, 48 * t, 45 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Beak/mouth protrusion on lower face
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 22 * t, 12 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his round shell body!",
                voice: "Koopas have a big round shell on their back! Draw a big half-circle shell above his belly!",
                draw(ctx, t) {
                    // Shell dome (back rounded part visible behind body)
                    ctx.beginPath();
                    ctx.ellipse(250, 250, 75 * t, 60 * t, 0, Math.PI, 0);
                    ctx.stroke();
                    // Belly plastron (front cream area)
                    ctx.beginPath();
                    ctx.ellipse(250, 270, 45 * t, 45 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Shell rim line (below dome)
                    ctx.beginPath();
                    ctx.moveTo(175, 250);
                    ctx.lineTo(175 + 150 * t, 250);
                    ctx.stroke();
                    // Shell segment pattern (2 small curves on shell)
                    ctx.beginPath();
                    ctx.ellipse(220, 220, 10 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(280, 220, 10 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 205, 10 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add his arms and hands!",
                voice: "Give Koopa two short arms with tiny hands sticking out of the shell sides!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(208, 255);
                    ctx.bezierCurveTo(195, 265, 180, 275, 175, 275 + 10 * t);
                    ctx.stroke();
                    // Left hand
                    ctx.beginPath();
                    ctx.arc(172, 285, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(292, 255);
                    ctx.bezierCurveTo(305, 265, 320, 275, 325, 275 + 10 * t);
                    ctx.stroke();
                    // Right hand
                    ctx.beginPath();
                    ctx.arc(328, 285, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his legs and big shoes!",
                voice: "Koopas wear cute little shoes to match their shells! Draw two legs with round shoes!",
                draw(ctx, t) {
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(222, 310);
                    ctx.lineTo(215, 310 + 25 * t);
                    ctx.stroke();
                    // Left shoe
                    ctx.beginPath();
                    ctx.ellipse(205, 345, 22 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(278, 310);
                    ctx.lineTo(285, 310 + 25 * t);
                    ctx.stroke();
                    // Right shoe
                    ctx.beginPath();
                    ctx.ellipse(295, 345, 22 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his friendly face — eyes and smile!",
                voice: "Finish Koopa with big round eyes, pointy eyebrows, a little nostril dot, and a happy smile!",
                draw(ctx, t) {
                    // Eyes
                    ctx.beginPath();
                    ctx.ellipse(235, 120, 8 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(237, 122, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(265, 120, 8 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(267, 122, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Eyebrows — pointed
                    ctx.beginPath();
                    ctx.moveTo(225, 105);
                    ctx.lineTo(245, 108 + 2 * t);
                    ctx.moveTo(275, 105);
                    ctx.lineTo(255, 108 + 2 * t);
                    ctx.stroke();
                    // Nostril on beak
                    ctx.beginPath();
                    ctx.arc(244, 147, 1.5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(256, 147, 1.5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Smile
                    ctx.beginPath();
                    ctx.arc(250, 153, 8, 0, Math.PI * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the shell green!", voice: "Koopa's big shell is bright green! Paint the top dome green!", color: '#43A047' },
            { text: "Paint the shell rim yellow!", voice: "The rim around his shell is golden yellow!", color: '#FDD835' },
            { text: "Color his body yellow!", voice: "Koopas have a yellow body and head! Paint his head and belly area yellow!", color: '#FFEE58' },
            { text: "Color the belly cream!", voice: "His tummy is a light cream color!", color: '#FFF59D' },
            { text: "Paint his shoes green!", voice: "Koopa's shoes match his shell — paint them green!", color: '#2E7D32' }
        ]
    },
    {
        id: 'bowserjr',
        name: 'Bowser Jr.',
        emoji: '👹',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Bowser Jr.'s big round head!",
                voice: "Let's draw Bowser Jr., Bowser's mischievous son! Start with a big round head — he has a bigger head than body!",
                draw(ctx, t) {
                    // Big head
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 65 * t, 58 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Small horns (pointy triangles on top)
                    ctx.beginPath();
                    ctx.moveTo(215, 100);
                    ctx.lineTo(210, 100 - 18 * t);
                    ctx.lineTo(222, 100);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(285, 100);
                    ctx.lineTo(290, 100 - 18 * t);
                    ctx.lineTo(278, 100);
                    ctx.closePath();
                    ctx.stroke();
                    // Small red ponytail tuft on top
                    ctx.beginPath();
                    ctx.moveTo(240, 92);
                    ctx.lineTo(245, 92 - 15 * t);
                    ctx.lineTo(250, 92 - 5 * t);
                    ctx.lineTo(255, 92 - 15 * t);
                    ctx.lineTo(260, 92);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw his signature bandana!",
                voice: "Bowser Jr. wears a white bandana over his mouth with his daddy's fangs drawn on it! Draw a band across the lower face!",
                draw(ctx, t) {
                    // Bandana — wide band across lower face
                    ctx.beginPath();
                    ctx.moveTo(190, 155);
                    ctx.bezierCurveTo(200, 170 + 10 * t, 300, 170 + 10 * t, 310, 155);
                    ctx.bezierCurveTo(305, 200 * t + 5, 285, 215 * t + 10, 250, 215 * t + 10);
                    ctx.bezierCurveTo(215, 215 * t + 10, 195, 200 * t + 5, 190, 155);
                    ctx.closePath();
                    ctx.stroke();
                    // Drawn-on fangs (two downward triangles on bandana)
                    ctx.beginPath();
                    ctx.moveTo(228, 180);
                    ctx.lineTo(233, 180 + 18 * t);
                    ctx.lineTo(240, 180);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(272, 180);
                    ctx.lineTo(267, 180 + 18 * t);
                    ctx.lineTo(260, 180);
                    ctx.closePath();
                    ctx.stroke();
                    // Drawn-on mouth line across bandana
                    ctx.beginPath();
                    ctx.moveTo(210, 178);
                    ctx.lineTo(210 + 80 * t, 178);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his round body and shell!",
                voice: "Now draw his little round tummy and a spiky shell on his back!",
                draw(ctx, t) {
                    // Body
                    ctx.beginPath();
                    ctx.ellipse(250, 290, 55 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Shell outline behind body (visible edges on sides)
                    ctx.beginPath();
                    ctx.ellipse(250, 280, 70 * t, 55 * t, 0, Math.PI * 1.1, Math.PI * 1.9, true);
                    ctx.stroke();
                    // Belly plates (horizontal lines)
                    ctx.beginPath();
                    ctx.moveTo(220, 275);
                    ctx.lineTo(220 + 60 * t, 275);
                    ctx.moveTo(218, 295);
                    ctx.lineTo(218 + 64 * t, 295);
                    ctx.moveTo(222, 315);
                    ctx.lineTo(222 + 56 * t, 315);
                    ctx.stroke();
                    // Spikes on shell (3 small white spikes visible from sides/top)
                    ctx.beginPath();
                    ctx.moveTo(195, 250);
                    ctx.lineTo(190, 250 - 15 * t);
                    ctx.lineTo(205, 250);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(295, 250);
                    ctx.lineTo(310, 250 - 15 * t);
                    ctx.lineTo(305, 250);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add his arms with bracelets and feet!",
                voice: "Bowser Jr. has spiky bracelets and padded feet with claws — draw his arms and legs!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(200, 280);
                    ctx.bezierCurveTo(175, 285, 165, 300, 160, 310 * t + 5);
                    ctx.stroke();
                    // Left bracelet (rectangle band)
                    ctx.beginPath();
                    ctx.rect(152, 305, 18 * t, 6 * t);
                    ctx.stroke();
                    // Left hand
                    ctx.beginPath();
                    ctx.arc(160, 325, 11 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(300, 280);
                    ctx.bezierCurveTo(325, 285, 335, 300, 340, 310 * t + 5);
                    ctx.stroke();
                    // Right bracelet
                    ctx.beginPath();
                    ctx.rect(330, 305, 18 * t, 6 * t);
                    ctx.stroke();
                    // Right hand
                    ctx.beginPath();
                    ctx.arc(340, 325, 11 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left foot
                    ctx.beginPath();
                    ctx.ellipse(215, 355, 20 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Claws on left foot
                    ctx.beginPath();
                    ctx.moveTo(200, 358);
                    ctx.lineTo(198, 358 + 6 * t);
                    ctx.moveTo(215, 362);
                    ctx.lineTo(215, 362 + 6 * t);
                    ctx.moveTo(230, 358);
                    ctx.lineTo(232, 358 + 6 * t);
                    ctx.stroke();
                    // Right foot
                    ctx.beginPath();
                    ctx.ellipse(285, 355, 20 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Claws on right foot
                    ctx.beginPath();
                    ctx.moveTo(270, 358);
                    ctx.lineTo(268, 358 + 6 * t);
                    ctx.moveTo(285, 362);
                    ctx.lineTo(285, 362 + 6 * t);
                    ctx.moveTo(300, 358);
                    ctx.lineTo(302, 358 + 6 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his big cheeky eyes and eyebrows!",
                voice: "Now give him two big round eyes and thick eyebrows — he's a cheeky little villain!",
                draw(ctx, t) {
                    // Big eyes
                    ctx.beginPath();
                    ctx.ellipse(225, 135, 12 * t, 15 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(225, 138, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(275, 135, 12 * t, 15 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(275, 138, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Thick eyebrows — angled inward
                    ctx.beginPath();
                    ctx.moveTo(208, 115);
                    ctx.lineTo(208 + 25 * t, 122 + 3 * t);
                    ctx.lineTo(208 + 25 * t, 115 + 8 * t);
                    ctx.lineTo(208, 108);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(292, 115);
                    ctx.lineTo(292 - 25 * t, 122 + 3 * t);
                    ctx.lineTo(292 - 25 * t, 115 + 8 * t);
                    ctx.lineTo(292, 108);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color his head and body yellow!", voice: "Bowser Jr.'s body is bright yellow — paint his head and tummy!", color: '#FFD54F' },
            { text: "Paint the top of his head green!", voice: "The top of his head is green like his dad's!", color: '#4CAF50' },
            { text: "Color the shell green!", voice: "His spiky shell is green too!", color: '#2E7D32' },
            { text: "Make the bandana white with black fangs!", voice: "The bandana is white — and the fangs drawn on it are black!", color: '#FFFFFF' },
            { text: "Color the red ponytail!", voice: "His little ponytail tuft is bright red like Bowser's hair!", color: '#E53935' }
        ]
    },
    {
        id: 'piranha',
        name: 'Piranha Plant',
        emoji: '🌱',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the warp pipe at the bottom!",
                voice: "Let's draw a Piranha Plant! First draw the green warp pipe it pops out of at the bottom!",
                draw(ctx, t) {
                    // Pipe rim (top, wider)
                    ctx.beginPath();
                    ctx.rect(170, 340 - 5 * t, 160 * t + (1 - t) * 80, 15 * t);
                    ctx.stroke();
                    // Pipe body (narrower under rim)
                    ctx.beginPath();
                    ctx.rect(185, 355, 130 * t, 45 * t);
                    ctx.stroke();
                    // Pipe rim ellipses (top oval for 3D look)
                    ctx.beginPath();
                    ctx.ellipse(250, 340, 80 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the green stem coming up!",
                voice: "Now draw a tall green stem growing out of the pipe!",
                draw(ctx, t) {
                    // Stem (two parallel lines with slight curve)
                    ctx.beginPath();
                    ctx.moveTo(230, 340);
                    ctx.bezierCurveTo(225, 280, 228, 230, 232, 220 + (1 - t) * 100);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(270, 340);
                    ctx.bezierCurveTo(275, 280, 272, 230, 268, 220 + (1 - t) * 100);
                    ctx.stroke();
                    // Two leaves on stem (one on each side)
                    ctx.beginPath();
                    ctx.ellipse(205, 280, 25 * t, 10 * t, -0.4, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(295, 280, 25 * t, 10 * t, 0.4, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big bulbous red head!",
                voice: "Now draw a big round red head on top of the stem — that's the mouth!",
                draw(ctx, t) {
                    // Big bulb head
                    ctx.beginPath();
                    ctx.ellipse(250, 160, 75 * t, 70 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the white polka dots on the head!",
                voice: "Piranha Plants have white polka dots all over their heads! Draw five round spots!",
                draw(ctx, t) {
                    // 5 circular spots on head
                    ctx.beginPath();
                    ctx.arc(215, 135, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(285, 135, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 110, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(200, 185, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(300, 185, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the wide open mouth with sharp teeth!",
                voice: "Now draw a big wide open mouth with zig-zag pointy teeth — CHOMP!",
                draw(ctx, t) {
                    // Open mouth — wide arc
                    ctx.beginPath();
                    ctx.ellipse(250, 175, 55 * t, 25 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Zig-zag teeth (top row)
                    const teeth = 6;
                    ctx.beginPath();
                    ctx.moveTo(250 - 55 * t, 170);
                    for (let i = 0; i <= teeth; i++) {
                        const x = 250 - 55 * t + (110 * t / teeth) * i;
                        const y = 170 + (i % 2 === 0 ? 0 : 10 * t);
                        ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                    // Zig-zag teeth (bottom row)
                    ctx.beginPath();
                    ctx.moveTo(250 - 55 * t, 180);
                    for (let i = 0; i <= teeth; i++) {
                        const x = 250 - 55 * t + (110 * t / teeth) * i;
                        const y = 180 + (i % 2 === 0 ? 10 * t : 0);
                        ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                    // Tongue (small curve inside mouth)
                    ctx.beginPath();
                    ctx.ellipse(250, 188, 18 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the head bright red!", voice: "Piranha Plant's big head is vivid red! Fill in the whole head!", color: '#E53935' },
            { text: "Paint the spots white!", voice: "All those polka dots are snow white!", color: '#FFFFFF' },
            { text: "Color the stem and leaves green!", voice: "The stem and leaves are bright green!", color: '#66BB6A' },
            { text: "Paint the pipe dark green!", voice: "The warp pipe is a darker forest green!", color: '#2E7D32' },
            { text: "Color the teeth white and tongue pink!", voice: "Sharp white teeth and a pink tongue!", color: '#FFFFFF' }
        ]
    },
    {
        id: 'yoshi',
        name: 'Yoshi',
        emoji: '🦖',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Yoshi's round head!",
                voice: "Let's draw Yoshi, Mario's best dinosaur friend! Start with a round head!",
                draw(ctx, t) {
                    // Head — round
                    ctx.beginPath();
                    ctx.ellipse(230, 140, 55 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Big muzzle/snout protruding to the right
                    ctx.beginPath();
                    ctx.ellipse(285, 160, 45 * t, 30 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Nostrils on snout
                    ctx.beginPath();
                    ctx.arc(310, 152, 2.5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(318, 158, 2.5 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add the spines on his head!",
                voice: "Yoshi has a row of orange spines on the back of his head — draw three little triangles!",
                draw(ctx, t) {
                    // Row of 3 orange spines along head top/back
                    ctx.beginPath();
                    ctx.moveTo(185, 100);
                    ctx.lineTo(180, 100 - 15 * t);
                    ctx.lineTo(197, 100);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(210, 92);
                    ctx.lineTo(208, 92 - 18 * t);
                    ctx.lineTo(222, 92);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(235, 92);
                    ctx.lineTo(235, 92 - 15 * t);
                    ctx.lineTo(248, 92);
                    ctx.closePath();
                    ctx.stroke();
                    // Eye (big oval on top of head)
                    ctx.beginPath();
                    ctx.ellipse(235, 105, 14 * t, 20 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Pupil
                    ctx.beginPath();
                    ctx.arc(237, 110, 7 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Smile line on snout
                    ctx.beginPath();
                    ctx.arc(290, 170, 25, 0, Math.PI * 0.6 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his round body with white belly!",
                voice: "Now draw a nice round body — he has a white tummy area in front!",
                draw(ctx, t) {
                    // Body
                    ctx.beginPath();
                    ctx.ellipse(240, 260, 65 * t, 70 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // White belly (inner oval)
                    ctx.beginPath();
                    ctx.ellipse(245, 270, 40 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Neck line connecting head to body
                    ctx.beginPath();
                    ctx.moveTo(205, 180);
                    ctx.lineTo(200, 180 + 20 * t);
                    ctx.moveTo(260, 185);
                    ctx.lineTo(265, 185 + 15 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add his red saddle shell!",
                voice: "Yoshi has a red saddle on his back — that's actually his shell! Draw a red bump with white trim!",
                draw(ctx, t) {
                    // Red saddle (visible as a bump on back — left side of body)
                    ctx.beginPath();
                    ctx.ellipse(190, 230, 30 * t, 22 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Saddle trim (inner ellipse)
                    ctx.beginPath();
                    ctx.ellipse(190, 232, 20 * t, 14 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Two little arms
                    ctx.beginPath();
                    ctx.moveTo(180, 250);
                    ctx.bezierCurveTo(160, 260, 150, 275, 150, 275 + 10 * t);
                    ctx.stroke();
                    // Left hand (glove-like)
                    ctx.beginPath();
                    ctx.arc(147, 290, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm (shorter, toward front)
                    ctx.beginPath();
                    ctx.moveTo(300, 250);
                    ctx.bezierCurveTo(315, 258, 320, 270, 318, 270 + 10 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(318, 285, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his legs with big orange shoes!",
                voice: "Yoshi wears big orange shoes to zoom around fast! Draw his two legs and shoes!",
                draw(ctx, t) {
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(210, 325);
                    ctx.lineTo(205, 325 + 20 * t);
                    ctx.stroke();
                    // Left big shoe (orange)
                    ctx.beginPath();
                    ctx.moveTo(175, 345);
                    ctx.lineTo(175, 345 + 20 * t);
                    ctx.bezierCurveTo(175, 385, 190, 385, 210, 385);
                    ctx.lineTo(230, 385);
                    ctx.lineTo(230, 355 + 5 * (1 - t));
                    ctx.lineTo(175, 345);
                    ctx.closePath();
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(275, 325);
                    ctx.lineTo(280, 325 + 20 * t);
                    ctx.stroke();
                    // Right big shoe
                    ctx.beginPath();
                    ctx.moveTo(255, 345);
                    ctx.lineTo(255, 355 + 5 * (1 - t));
                    ctx.lineTo(255, 385);
                    ctx.lineTo(290, 385);
                    ctx.bezierCurveTo(310, 385, 315, 385, 315, 345 + 20 * t);
                    ctx.lineTo(315, 345);
                    ctx.closePath();
                    ctx.stroke();
                    // Tail tip (small curl behind)
                    ctx.beginPath();
                    ctx.moveTo(180, 300);
                    ctx.bezierCurveTo(160, 310, 155, 320, 150, 310);
                    ctx.lineTo(155, 302 + 3 * (1 - t));
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color Yoshi green!", voice: "Yoshi is lime green! Paint his head, body, arms and legs green!", color: '#66BB6A' },
            { text: "Paint his belly and snout white!", voice: "His belly, snout, and hand gloves are all white!", color: '#FFFFFF' },
            { text: "Color the saddle red!", voice: "Yoshi's saddle shell on his back is red with white trim!", color: '#E53935' },
            { text: "Paint the spines orange!", voice: "Those little spines on his head are bright orange!", color: '#FF9800' },
            { text: "Color the shoes orange!", voice: "His big speedy shoes are orange too!", color: '#F57C00' }
        ]
    },
    {
        id: 'toad',
        name: 'Toad',
        emoji: '🍄',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Toad's big mushroom cap!",
                voice: "Let's draw Toad — Princess Peach's loyal helper! Start with his big round mushroom cap!",
                draw(ctx, t) {
                    // Big mushroom cap (wider than body)
                    ctx.beginPath();
                    ctx.moveTo(250 - 95 * t, 155);
                    ctx.bezierCurveTo(250 - 110 * t, 100, 250 - 70 * t, 70, 250, 70 + 5 * (1 - t));
                    ctx.bezierCurveTo(250 + 70 * t, 70, 250 + 110 * t, 100, 250 + 95 * t, 155);
                    // Bottom curl of cap
                    ctx.bezierCurveTo(250 + 70 * t, 165, 250 + 40 * t, 160, 250, 160);
                    ctx.bezierCurveTo(250 - 40 * t, 160, 250 - 70 * t, 165, 250 - 95 * t, 155);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add the big white spots on the cap!",
                voice: "Paint round white spots all over his cap! Draw 4 big round circles!",
                draw(ctx, t) {
                    // 4 white spots on cap
                    ctx.beginPath();
                    ctx.arc(205, 115, 16 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(295, 115, 16 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 90, 17 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(245, 140, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his small round face!",
                voice: "Toad has a tiny face below his cap! Draw a small round face shape!",
                draw(ctx, t) {
                    // Face — small round face under cap
                    ctx.beginPath();
                    ctx.ellipse(250, 195, 40 * t, 35 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Pointy ears on side of face
                    ctx.beginPath();
                    ctx.moveTo(215, 190);
                    ctx.lineTo(210, 190 - 8 * t);
                    ctx.lineTo(215, 195);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(285, 190);
                    ctx.lineTo(290, 190 - 8 * t);
                    ctx.lineTo(285, 195);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw his body with blue vest!",
                voice: "Toad wears a cute blue vest! Draw his little body with a V-shape vest on top!",
                draw(ctx, t) {
                    // Body (small rounded rectangle)
                    ctx.beginPath();
                    ctx.moveTo(215, 230);
                    ctx.lineTo(215, 230 + 80 * t);
                    ctx.bezierCurveTo(215, 320, 250, 325, 250, 325);
                    ctx.bezierCurveTo(250, 325, 285, 320, 285, 230 + 80 * t);
                    ctx.lineTo(285, 230);
                    ctx.stroke();
                    // V-shape vest collar
                    ctx.beginPath();
                    ctx.moveTo(220, 235);
                    ctx.lineTo(220 + 28 * t, 235 + 35 * t);
                    ctx.lineTo(220 + 56 * t, 235);
                    ctx.stroke();
                    // Vest golden trim lines (two vertical)
                    ctx.beginPath();
                    ctx.moveTo(220, 240);
                    ctx.lineTo(220, 240 + 70 * t);
                    ctx.moveTo(280, 240);
                    ctx.lineTo(280, 240 + 70 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add his arms, shoes, and happy face!",
                voice: "Finish with little arms, brown shoes, and his happy smiling eyes!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(215, 260);
                    ctx.bezierCurveTo(200, 265, 190, 280, 188, 290 * t + 5);
                    ctx.stroke();
                    // Left hand
                    ctx.beginPath();
                    ctx.arc(186, 300, 9 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(285, 260);
                    ctx.bezierCurveTo(300, 265, 310, 280, 312, 290 * t + 5);
                    ctx.stroke();
                    // Right hand
                    ctx.beginPath();
                    ctx.arc(314, 300, 9 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Left shoe
                    ctx.beginPath();
                    ctx.ellipse(225, 335, 18 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right shoe
                    ctx.beginPath();
                    ctx.ellipse(275, 335, 18 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Eyes — two small black ovals
                    ctx.beginPath();
                    ctx.ellipse(237, 190, 4 * t, 7 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(263, 190, 4 * t, 7 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Happy smile
                    ctx.beginPath();
                    ctx.arc(250, 205, 10, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color his cap white!", voice: "Toad's mushroom cap is mostly white — paint the background!", color: '#FFFFFF' },
            { text: "Paint the spots bright red!", voice: "Those round spots on his cap are cherry red!", color: '#E53935' },
            { text: "Paint his vest blue!", voice: "Toad's cute vest is royal blue!", color: '#1E88E5' },
            { text: "Color the vest trim gold!", voice: "The trim on his vest is shiny gold!", color: '#FFC107' },
            { text: "Paint his shoes brown!", voice: "His little shoes are brown!", color: '#6D4C41' }
        ]
    },
    {
        id: 'kamek',
        name: 'Kamek',
        emoji: '🧙',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Kamek's wizard hat!",
                voice: "Let's draw Kamek, Bowser's wise Magikoopa wizard! Start with his tall pointy wizard hat!",
                draw(ctx, t) {
                    // Pointy wizard hat
                    ctx.beginPath();
                    ctx.moveTo(220, 110);
                    ctx.lineTo(250, 110 - 70 * t);
                    ctx.lineTo(280, 110);
                    ctx.closePath();
                    ctx.stroke();
                    // Hat brim (white band at bottom)
                    ctx.beginPath();
                    ctx.rect(210, 108, 80 * t, 10 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his Koopa face!",
                voice: "Now draw his Koopa-like head with a pointy beak!",
                draw(ctx, t) {
                    // Head
                    ctx.beginPath();
                    ctx.ellipse(250, 160, 48 * t, 42 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Beak/snout
                    ctx.beginPath();
                    ctx.moveTo(250, 165);
                    ctx.lineTo(250 + 28 * t, 170);
                    ctx.lineTo(250, 180);
                    ctx.stroke();
                    // Little fang
                    ctx.beginPath();
                    ctx.moveTo(258, 178);
                    ctx.lineTo(258, 178 + 6 * t);
                    ctx.lineTo(263, 178);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Add his round spectacles!",
                voice: "Kamek wears big round glasses — draw two circles with a bridge between them!",
                draw(ctx, t) {
                    // Left lens
                    ctx.beginPath();
                    ctx.arc(232, 155, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right lens
                    ctx.beginPath();
                    ctx.arc(268, 155, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Bridge
                    ctx.beginPath();
                    ctx.moveTo(246, 155);
                    ctx.lineTo(246 + 8 * t, 155);
                    ctx.stroke();
                    // Eyes inside lenses
                    ctx.beginPath();
                    ctx.arc(232, 155, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(268, 155, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Draw his long wizard robe!",
                voice: "Now draw his flowing blue wizard robe — a big triangle going all the way down!",
                draw(ctx, t) {
                    // Robe — wide triangle/bell shape
                    ctx.beginPath();
                    ctx.moveTo(220, 200);
                    ctx.bezierCurveTo(210, 220, 170, 320 * t + 30, 160, 380 * t + 10);
                    ctx.lineTo(340, 380 * t + 10);
                    ctx.bezierCurveTo(330, 320 * t + 30, 290, 220, 280, 200);
                    ctx.stroke();
                    // Collar line (between head and robe)
                    ctx.beginPath();
                    ctx.moveTo(222, 205);
                    ctx.lineTo(222 + 56 * t, 205);
                    ctx.stroke();
                    // Bottom edge ruffle
                    ctx.beginPath();
                    ctx.moveTo(160, 385);
                    ctx.bezierCurveTo(200, 378 - 5 * t, 250, 388 + 3 * t, 300, 378 - 5 * t);
                    ctx.lineTo(340, 385);
                    ctx.stroke();
                }
            },
            {
                text: "Add the sleeves, hand, and magic staff!",
                voice: "Finish with his wide sleeves, a little hand holding a staff, and a red jewel on top!",
                draw(ctx, t) {
                    // Left sleeve (wider at end)
                    ctx.beginPath();
                    ctx.moveTo(215, 220);
                    ctx.lineTo(190, 220 + 50 * t);
                    ctx.lineTo(165, 220 + 50 * t);
                    ctx.lineTo(190, 215);
                    ctx.closePath();
                    ctx.stroke();
                    // White sleeve cuff
                    ctx.beginPath();
                    ctx.moveTo(165, 270);
                    ctx.lineTo(165, 270 + 8 * t);
                    ctx.lineTo(190, 270 + 8 * t);
                    ctx.lineTo(190, 270);
                    ctx.stroke();
                    // Left hand
                    ctx.beginPath();
                    ctx.arc(177, 290, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right sleeve
                    ctx.beginPath();
                    ctx.moveTo(285, 220);
                    ctx.lineTo(310, 220 + 50 * t);
                    ctx.lineTo(335, 220 + 50 * t);
                    ctx.lineTo(310, 215);
                    ctx.closePath();
                    ctx.stroke();
                    // White cuff right
                    ctx.beginPath();
                    ctx.moveTo(310, 270);
                    ctx.lineTo(310, 270 + 8 * t);
                    ctx.lineTo(335, 270 + 8 * t);
                    ctx.lineTo(335, 270);
                    ctx.stroke();
                    // Right hand holding staff
                    ctx.beginPath();
                    ctx.arc(323, 290, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Magic staff (vertical rod)
                    ctx.beginPath();
                    ctx.moveTo(335, 290);
                    ctx.lineTo(335, 290 - 100 * t);
                    ctx.stroke();
                    // Red jewel on top (star shape)
                    ctx.beginPath();
                    ctx.arc(335, 185, 10 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Small magic sparkles
                    ctx.beginPath();
                    ctx.moveTo(355, 175);
                    ctx.lineTo(355 + 8 * t, 175 - 8 * t);
                    ctx.moveTo(355, 195);
                    ctx.lineTo(355 + 8 * t, 195 + 8 * t);
                    ctx.moveTo(315, 175);
                    ctx.lineTo(315 - 8 * t, 175 - 8 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the hat and robe blue!", voice: "Kamek's robes and hat are deep wizard blue!", color: '#1565C0' },
            { text: "Paint his face yellow!", voice: "His Koopa face is yellow like other Magikoopas!", color: '#FFD54F' },
            { text: "Color the hat brim and cuffs white!", voice: "The trim on the hat and sleeve cuffs is white!", color: '#FFFFFF' },
            { text: "Paint the jewel red!", voice: "The magic jewel on his staff glows bright red!", color: '#E53935' },
            { text: "Color the staff gold!", voice: "His staff is made of shiny gold!", color: '#FFC107' }
        ]
    },
    {
        id: 'star',
        name: 'Super Star',
        emoji: '⭐',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the big 5-pointed star!",
                voice: "Let's draw the Super Star — it makes Mario invincible! Start with a big 5-pointed star shape!",
                draw(ctx, t) {
                    const cx = 250, cy = 200;
                    const outerR = 115 * t;
                    const innerR = 48 * t;
                    const points = 5;
                    ctx.beginPath();
                    for (let i = 0; i < points * 2; i++) {
                        const r = i % 2 === 0 ? outerR : innerR;
                        const angle = (Math.PI / points) * i - Math.PI / 2;
                        const x = cx + r * Math.cos(angle);
                        const y = cy + r * Math.sin(angle);
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw two big round eyes!",
                voice: "The Super Star has a friendly face! Draw two big round eyes!",
                draw(ctx, t) {
                    // Left eye (white oval)
                    ctx.beginPath();
                    ctx.ellipse(225, 185, 14 * t, 20 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right eye
                    ctx.beginPath();
                    ctx.ellipse(275, 185, 14 * t, 20 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Fill in the black pupils!",
                voice: "Draw two big black pupils inside — the Super Star is looking right at you!",
                draw(ctx, t) {
                    // Left pupil
                    ctx.beginPath();
                    ctx.ellipse(225, 188, 8 * t, 13 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // Right pupil
                    ctx.beginPath();
                    ctx.ellipse(275, 188, 8 * t, 13 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    // White highlight on left pupil
                    ctx.beginPath();
                    ctx.arc(228, 183, 3 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // White highlight on right pupil
                    ctx.beginPath();
                    ctx.arc(278, 183, 3 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big happy smile!",
                voice: "Now finish with a big wide smile — the Super Star is always ready to power up!",
                draw(ctx, t) {
                    // Big smile arc
                    ctx.beginPath();
                    ctx.arc(250, 215, 28, 0.1 * Math.PI, (0.1 + 0.8 * t) * Math.PI);
                    ctx.stroke();
                    // Tongue/lip line inside mouth
                    ctx.beginPath();
                    ctx.moveTo(230, 227);
                    ctx.lineTo(230 + 40 * t, 227);
                    ctx.stroke();
                    // Little cheek blush marks
                    ctx.beginPath();
                    ctx.arc(198, 210, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(302, 210, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color the star bright yellow!", voice: "The Super Star is shining yellow — paint the whole star!", color: '#FDD835' },
            { text: "Add a golden orange glow!", voice: "Add a warm orange glow around the inner edges!", color: '#FF9800' },
            { text: "Paint the eyes white!", voice: "Fill in the eye whites!", color: '#FFFFFF' },
            { text: "Make the pupils black!", voice: "Paint the big pupils jet black!", color: '#212121' },
            { text: "Color the smile red!", voice: "Make the Super Star's happy mouth red!", color: '#E53935' }
        ]
    },
    {
        id: 'sonic',
        name: 'Sonic',
        emoji: '\u{1F4A8}',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Sonic's head and snout (muzzle)!",
                voice: "Let's draw Sonic! Start with a big round head. Add a round snout on the front — the lighter fuzzy part is called his muzzle!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 155, 52 * t, 46 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 185, 36 * t, 20 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add his two huge cartoon eyes!",
                voice: "Sonic has big, connected cartoon eyes! Draw two big ovals side by side — they almost look like a pair of eggs!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 162, 22 * t, 28 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(270, 162, 22 * t, 28 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the spiky quills and pointy ears!",
                voice: "Sonic is a hedgehog! Add curved spiky quills that sweep back like wind — and two tall triangle ears. That's his speedy look!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(198, 120);
                    ctx.bezierCurveTo(130, 100 - 15 * t, 100 + 25 * t, 85, 90 + 40 * t, 100 + 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(210, 112);
                    ctx.bezierCurveTo(145, 75, 120 + 20 * t, 60, 110 + 45 * t, 80 + 10 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(250, 105);
                    ctx.lineTo(250, 50 + 20 * (1 - t) + 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(302, 120);
                    ctx.bezierCurveTo(370, 100 - 15 * t, 400 - 25 * t, 85, 410 - 40 * t, 100 + 30 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 112);
                    ctx.bezierCurveTo(355, 75, 380 - 20 * t, 60, 390 - 45 * t, 80 + 10 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(210, 128);
                    ctx.lineTo(180 - 12 * t, 100 - 15 * t);
                    ctx.lineTo(196, 118);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 128);
                    ctx.lineTo(320 + 12 * t, 100 - 15 * t);
                    ctx.lineTo(304, 118);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw his small body, gloves, and red shoes!",
                voice: "Add a small oval for his body, white cartoon gloves, and his famous big red running shoes. Gotta go fast!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 280, 40 * t, 48 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 270, 18 * t, 22 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(215, 245);
                    ctx.bezierCurveTo(175, 255, 168, 275, 165, 290 * t + 5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(162, 295, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(285, 245);
                    ctx.bezierCurveTo(325, 255, 332, 275, 335, 290 * t + 5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(338, 295, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(230, 315);
                    ctx.lineTo(225, 320 + 28 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(270, 315);
                    ctx.lineTo(275, 320 + 28 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(220, 355, 26 * t, 13 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(280, 355, 26 * t, 13 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(210, 350);
                    ctx.lineTo(230, 350);
                    ctx.moveTo(270, 350);
                    ctx.lineTo(290, 350);
                    ctx.stroke();
                }
            },
            {
                text: "Add nose, green eyes, and a confident smile!",
                voice: "Finish with a little oval nose, green eyes, tiny eyebrows, and a smile. That's Sonic the Hedgehog!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 192, 7 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(230, 165, 10 * t, 16 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(270, 165, 10 * t, 16 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(220, 145);
                    ctx.lineTo(225 - 2 * t, 140 - 2 * t);
                    ctx.moveTo(280, 145);
                    ctx.lineTo(275 + 2 * t, 140 - 2 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 210, 18, 0.05 * Math.PI, (0.05 + 0.85 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the quills and body blue!", voice: "Sonic is bright blue from head to toe — use a bold blue for his spiky quills and body!", color: '#1E5AFF' },
            { text: "Color the muzzle and stomach peach!", voice: "His snout, inner ears, and tummy are soft peachy tan — paint those areas!", color: '#FDBA91' },
            { text: "Color the big eyes green!", voice: "Fill the eyes with Sonic's cool green! Leave a small white highlight if you can!", color: '#43A047' },
            { text: "Paint the gloves and shoe stripes white!", voice: "His gloves are clean white! Add a white strap on the red shoes too!", color: '#FAFAFA' },
            { text: "Make the running shoes red!", voice: "Power up the classic red and add a little yellow buckle if you like!", color: '#E53935' }
        ]
    },
    {
        id: 'knuckles',
        name: 'Knuckles',
        emoji: '\u{1F4AA}',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Knuckles' strong head and muzzle!",
                voice: "Let's draw Knuckles the Echidna! He has a strong, wide head. Draw a wide oval, then a smaller rounded snout on the front!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 155, 50 * t, 48 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 190, 32 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add his long dreadlock spines!",
                voice: "Echidnas have thick spines that look like long dreadlocks! Draw four chunky curved locks hanging down the sides and back.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(215, 110);
                    ctx.bezierCurveTo(195, 110 + 60 * t, 200, 110 + 120 * t, 208, 110 + 180 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(230, 102);
                    ctx.bezierCurveTo(220, 102 + 70 * t, 230, 102 + 130 * t, 235, 102 + 190 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(250, 100);
                    ctx.bezierCurveTo(250, 100 + 80 * t, 250, 100 + 150 * t, 250, 100 + 200 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(270, 102);
                    ctx.bezierCurveTo(280, 102 + 70 * t, 270, 102 + 130 * t, 265, 102 + 190 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(285, 110);
                    ctx.bezierCurveTo(305, 110 + 60 * t, 300, 110 + 120 * t, 292, 110 + 180 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw his big fists and white gloves!",
                voice: "Knuckles is famous for huge punching gloves! Add round arms and the biggest, roundest fists you can draw — with little spike bumps on the knuckles!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 280, 42 * t, 50 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(210, 245);
                    ctx.bezierCurveTo(155, 250, 130, 265, 125, 285 * t + 5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(118, 290, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(135, 275);
                    ctx.lineTo(135 - 5 * t, 268 - 5 * t);
                    ctx.moveTo(120, 285);
                    ctx.lineTo(110 - 5 * t, 278 - 2 * t);
                    ctx.moveTo(128, 300);
                    ctx.lineTo(118 - 4 * t, 305);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 245);
                    ctx.bezierCurveTo(345, 250, 370, 265, 375, 285 * t + 5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(382, 290, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(365, 275);
                    ctx.lineTo(365 + 5 * t, 268 - 5 * t);
                    ctx.moveTo(380, 285);
                    ctx.lineTo(390 + 5 * t, 278 - 2 * t);
                    ctx.moveTo(372, 300);
                    ctx.lineTo(382 + 4 * t, 305);
                    ctx.stroke();
                }
            },
            {
                text: "Add legs, shoes, and the chest crescent!",
                voice: "Draw short legs, tough shoes, and a little moon-shaped mark on the front of his body — that is the Master Emerald crest!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 255, 16 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.moveTo(250 - 6 * t, 260);
                    ctx.bezierCurveTo(250, 255 + 8 * t, 250, 255 + 8 * t, 250 + 6 * t, 260);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(230, 320);
                    ctx.lineTo(220, 320 + 32 * t);
                    ctx.moveTo(270, 320);
                    ctx.lineTo(280, 320 + 32 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(215, 355, 24 * t, 12 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(285, 355, 24 * t, 12 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw eyes, trapezoid brows, and a small smile!",
                voice: "Add serious purple eyes, thick angled eyebrows, and a tough little smile. Knuckles does not back down from a challenge!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(232, 165, 12 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(268, 165, 12 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(215, 135);
                    ctx.lineTo(240, 128 - 3 * t);
                    ctx.lineTo(240, 135);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(285, 135);
                    ctx.lineTo(260, 128 - 3 * t);
                    ctx.lineTo(260, 135);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 195, 6 * t, 4 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(250, 212, 12, 0.2 * Math.PI, (0.2 + 0.55 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color Knuckles red and crimson!", voice: "His fur and spines are deep red — use a strong red and a darker crimson in the shadows!", color: '#C62828' },
            { text: "Paint the muzzle and chest mark!", voice: "His snout and crescent are peach — paint them lighter than the red fur!", color: '#FDBA91' },
            { text: "Fill the eyes purple!", voice: "His eyes are glowing purple! Cover the ovals in purple, then a darker dot for pupils if you like!", color: '#7E57C2' },
            { text: "White gloves and shoe accents!", voice: "Gloves and shoe cuffs are clean white! Add a green stripe on the shoes if you want the classic look!", color: '#F5F5F5' },
            { text: "Yellow-green shoe stripes!", voice: "Add bright yellow-green for the details on the shoes and gloves!", color: '#CDDC39' }
        ]
    },
    {
        id: 'eggman',
        name: 'Dr. Eggman',
        emoji: '\u{1F95A}',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the big round body and dome head!",
                voice: "Dr. Eggman is shaped like an egg! Draw one very big round outline — that is his head and body together!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 205, 78 * t, 92 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add his round pince-nez glasses!",
                voice: "He wears small round spectacles! Draw two circles for lenses and a little bridge in the middle — like tiny goggles!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(225, 175, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(275, 175, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(247, 175);
                    ctx.lineTo(253, 175);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the bushy mustache and bald top!",
                voice: "Under the glasses, add a big fluffy mustache. Leave the top of the head smooth — he is very proud of his bald dome! Add little round poofs for sideburns on the sides.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(200, 192);
                    ctx.bezierCurveTo(215, 188 + 15 * t, 220, 195 + 10 * t, 250, 198);
                    ctx.bezierCurveTo(280, 195 + 10 * t, 285, 188 + 15 * t, 300, 192);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(195, 195);
                    ctx.bezierCurveTo(185, 200 + 20 * t, 200, 210 + 20 * t, 250, 215);
                    ctx.bezierCurveTo(300, 210 + 20 * t, 315, 200 + 20 * t, 305, 195);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(188, 165, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(312, 165, 12 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add short arms, legs, and white gloves!",
                voice: "Draw short stubby arms in white gloves, and two tiny legs with little shoes at the bottom of the big round body.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(200, 250);
                    ctx.bezierCurveTo(150, 255, 130, 265, 125, 285 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(120, 295, 20 * t, 15 * t, -0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(300, 250);
                    ctx.bezierCurveTo(350, 255, 370, 265, 375, 285 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(380, 295, 20 * t, 15 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(220, 290);
                    ctx.bezierCurveTo(218, 300 + 25 * t, 220, 310 + 40 * t, 220, 330 + 15 * t);
                    ctx.moveTo(280, 290);
                    ctx.bezierCurveTo(282, 300 + 25 * t, 280, 310 + 40 * t, 280, 330 + 15 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(220, 345, 18 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(280, 345, 18 * t, 10 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw nose, angry brows, and jacket buttons!",
                voice: "Add a bumpy little nose, thick angry eyebrows, a smug grin, and a few little circles down the front for coat buttons. There is the evil genius!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 182, 10 * t, 9 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(225, 155, 10 * t, 5 * t, -0.1, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(275, 155, 10 * t, 5 * t, 0.1, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 220, 22, 0.1 * Math.PI, (0.1 + 0.75 * t) * Math.PI);
                    ctx.stroke();
                    for (let i = 0; i < 4; i++) {
                        const y = 240 + i * 22;
                        ctx.beginPath();
                        ctx.arc(250, y, 4 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the face and hands yellow!", voice: "Eggman has a yellowy skin tone on his face and those round hands!", color: '#FDD835' },
            { text: "Paint the coat and legs red!", voice: "Fill his jacket and the lower part of the egg body in dark red or bright red — like a fancy suit!", color: '#C62828' },
            { text: "Black mustache and brows!", voice: "Use solid black for that huge mustache and the sharp eyebrows!", color: '#1A1A1A' },
            { text: "White gloves!", voice: "The gloves and sleeve cuffs are bright white.", color: '#FFFFFF' },
            { text: "Add gray glasses and black shoes!", voice: "Lightly shade the round glasses. Dark gray or black for the tiny shoes!", color: '#616161' }
        ]
    },
    {
        id: 'tails',
        name: 'Tails',
        emoji: '\u{1F98A}',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the fox head and muzzle!",
                voice: "This is Tails! He is a fox with two fluffy tails! Start with a round head and a small oval for his snout.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 48 * t, 44 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(255, 182, 30 * t, 16 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add big fox ears and hair tuft!",
                voice: "Draw two tall pointy ears on top. Add a little spiky clump of hair in the center — Tails is super cute and fluffy!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(215, 125);
                    ctx.lineTo(200 - 8 * t, 60 + 20 * t);
                    ctx.lineTo(225, 108);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(285, 125);
                    ctx.lineTo(300 + 8 * t, 60 + 20 * t);
                    ctx.lineTo(275, 108);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(250, 100);
                    ctx.lineTo(242 - 4 * t, 80 - 5 * t);
                    ctx.lineTo(250, 90);
                    ctx.lineTo(258 + 4 * t, 80 - 5 * t);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw big friendly eyes and cheek fur!",
                voice: "Add two very big ovals for eyes, and a little zig-zag or puff on each cheek where his side fur sticks out.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 155, 20 * t, 26 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(270, 155, 20 * t, 26 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(200, 175);
                    ctx.lineTo(192 - 6 * t, 180 + 3 * t);
                    ctx.lineTo(198, 186);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(300, 175);
                    ctx.lineTo(308 + 6 * t, 180 + 3 * t);
                    ctx.lineTo(302, 186);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the body, tiny legs, and TWO big tails!",
                voice: "Add a small round body, short legs, and two big fluffy fox tails with lots of curve — the twin tails are his special power!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 275, 38 * t, 42 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 270, 20 * t, 24 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(230, 308);
                    ctx.lineTo(225, 308 + 25 * t);
                    ctx.moveTo(270, 308);
                    ctx.lineTo(275, 308 + 25 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(220, 340, 22 * t, 11 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(280, 340, 22 * t, 11 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(200, 270);
                    ctx.bezierCurveTo(120 + 40 * t, 260, 40 + 30 * t, 200 + 30 * t, 30 + 25 * t, 160 + 20 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(220, 275);
                    ctx.bezierCurveTo(130 + 40 * t, 280, 50 + 30 * t, 240, 50 + 25 * t, 200);
                    ctx.stroke();
                }
            },
            {
                text: "Add blue eyes, small nose, and a happy smile!",
                voice: "Put bright blue ovals in the eyes, a tiny black nose, and a sweet smile. Tails is ready to fly beside Sonic!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 193, 6 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(230, 160, 12 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(270, 160, 12 * t, 18 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(250, 210, 16, 0.15 * Math.PI, (0.15 + 0.75 * t) * Math.PI);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the fur warm orange and yellow!", voice: "Tails is covered in warm orange and golden yellow fur — use orange on the body and a lighter yellow on the muzzle and tail tips if you can!", color: '#FF9800' },
            { text: "Color the muzzle, belly, and ear insides white!", voice: "The belly patch, ear insides, and snout are creamy white and fluffy!", color: '#FFF3E0' },
            { text: "Bright blue for the eyes!", voice: "Fill his big eye shapes with bright blue!", color: '#42A5F5' },
            { text: "Red and white for the shoes!", voice: "His sneakers are red and white in most games — have fun with stripes!", color: '#E53935' },
            { text: "Use dark brown for the nose!", voice: "A small dark brown or black for that fox nose gives a cute finish.", color: '#4E342E' }
        ]
    },
    {
        id: 'shadow',
        name: 'Shadow',
        emoji: '\u{1F319}',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Shadow's head, muzzle, and short torso!",
                voice: "Shadow looks a bit like Sonic, but in dark colors! Draw a similar round head, muzzle, and a compact body for his strong stance.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 50 * t, 45 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 182, 34 * t, 19 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 275, 38 * t, 46 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add sharp swept-back quills and red stripes!",
                voice: "His quills point more upward and back — a wilder, fiercer look! Add short red stripe marks along a few of the spines, like his game design.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(202, 118);
                    ctx.bezierCurveTo(120 + 20 * t, 85, 100 + 30 * t, 70, 88 + 35 * t, 95);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(210, 108);
                    ctx.bezierCurveTo(140, 60 + 5 * t, 120, 50 + 10 * t, 100 + 25 * t, 75);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(250, 100);
                    ctx.lineTo(250, 100 - 48 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(244, 88 - 5 * t);
                    ctx.lineTo(244 - 3 * t, 72);
                    ctx.moveTo(256, 88 - 5 * t);
                    ctx.lineTo(256 + 3 * t, 72);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(298, 118);
                    ctx.bezierCurveTo(380 - 20 * t, 85, 400 - 30 * t, 70, 412 - 35 * t, 95);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 108);
                    ctx.bezierCurveTo(360, 60 + 5 * t, 380, 50 + 10 * t, 400 - 25 * t, 75);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(208, 128);
                    ctx.lineTo(178 - 10 * t, 100 - 8 * t);
                    ctx.lineTo(196, 120);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(292, 128);
                    ctx.lineTo(322 + 10 * t, 100 - 8 * t);
                    ctx.lineTo(304, 120);
                    ctx.closePath();
                    ctx.stroke();
                }
            },
            {
                text: "Draw the big red-trimmed eyes!",
                voice: "Shadow has intense, narrow red eyes! Draw the same big cartoon eye shapes, but a bit sharper on the inside corners.",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(230, 160, 21 * t, 26 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(270, 160, 21 * t, 26 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add arms, white cuffs, and hover-shoes!",
                voice: "Draw arms with big white rings at the wrist. His shoes are thick hover skates with gold-yellow soles — a bit blockier than Sonic's sneakers!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(213, 245);
                    ctx.bezierCurveTo(170, 255, 160, 275, 158, 295 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(155, 288);
                    ctx.lineTo(155, 300 + 5 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(152, 302, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(137, 295);
                    ctx.lineTo(137, 300 + 2 * t);
                    ctx.lineTo(167, 300 + 2 * t);
                    ctx.lineTo(167, 295);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(287, 245);
                    ctx.bezierCurveTo(330, 255, 340, 275, 342, 295 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(345, 288);
                    ctx.lineTo(345, 300 + 5 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(348, 302, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(333, 295);
                    ctx.lineTo(333, 300 + 2 * t);
                    ctx.lineTo(363, 300 + 2 * t);
                    ctx.lineTo(363, 295);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(230, 315);
                    ctx.lineTo(222, 315 + 28 * t);
                    ctx.moveTo(270, 315);
                    ctx.lineTo(278, 315 + 28 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(198, 333 + 5 * t, 40 * t, 22 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.rect(262, 333 + 5 * t, 40 * t, 22 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(198, 345 + 5 * t);
                    ctx.lineTo(198 - 2 * t, 350 + 8 * t);
                    ctx.lineTo(238, 350 + 8 * t);
                    ctx.lineTo(238, 345);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(262, 345 + 5 * t);
                    ctx.lineTo(262 - 2 * t, 350 + 8 * t);
                    ctx.lineTo(302, 350 + 8 * t);
                    ctx.lineTo(302, 345);
                    ctx.stroke();
                }
            },
            {
                text: "Add red irises, brows, and a cool smirk!",
                voice: "Fill the eyes with deep red, add sharp angled brows, a tiny nose, and a smirk — the ultimate life form, drawn by you!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 194, 7 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(230, 163, 9 * t, 16 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.ellipse(270, 163, 9 * t, 16 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(210, 142);
                    ctx.lineTo(235, 130 - 2 * t);
                    ctx.lineTo(235, 140);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(290, 142);
                    ctx.lineTo(265, 130 - 2 * t);
                    ctx.lineTo(265, 140);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(240, 215);
                    ctx.quadraticCurveTo(250, 220 + 5 * t, 270, 210);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Black and dark gray fur!", voice: "Shadow is mostly deep black and charcoal gray. Leave some lighter gray highlights on the quills!", color: '#1A1A1A' },
            { text: "Red and crimson details!", voice: "Add crimson and bright red to his stripes, shoe accents, and around the eyes!", color: '#D32F2F' },
            { text: "Peach muzzle and ear insides!", voice: "Like other hedgehogs, the snout and inner ears are soft peach, but a bit more muted.", color: '#D7A78E' },
            { text: "White gloves and cuff rings!", voice: "White for the big glove cuffs, with gold-yellow rings in the center!", color: '#ECEFF1' },
            { text: "Gold and yellow for hover skates!", voice: "The bottoms of the hover skates are bright yellow and gold — make them glow like boost energy!", color: '#FBC02D' }
        ]
    },

    // ===== PIKACHU =====
    {
        id: 'pikachu',
        name: 'Pikachu',
        emoji: '⚡',
        category: 'cartoon',
        steps: [
            {
                text: "Draw Pikachu's big round head!",
                voice: "Pika pika! Let's draw Pikachu! Start with a big round oval for the head — Pikachu has the chubbiest, cutest face!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 150, 70 * t, 64 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Add the round tummy!",
                voice: "Now draw a round oval below for the tummy — Pikachu has a nice plump little belly!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 268, 52 * t, 55 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the tall pointy ears!",
                voice: "Pikachu's ears are tall and pointy with black tips — draw two big triangles on top of the head!",
                draw(ctx, t) {
                    // Left ear — grows from base center (210, 105)
                    ctx.beginPath();
                    ctx.moveTo(210 - 13 * t, 105);
                    ctx.lineTo(210 - 26 * t, 105 - 65 * t);
                    ctx.lineTo(210 + 13 * t, 105);
                    ctx.closePath();
                    ctx.stroke();
                    // Right ear — grows from base center (290, 105)
                    ctx.beginPath();
                    ctx.moveTo(290 - 13 * t, 105);
                    ctx.lineTo(290 + 26 * t, 105 - 65 * t);
                    ctx.lineTo(290 + 13 * t, 105);
                    ctx.closePath();
                    ctx.stroke();
                    // Black tip — left ear
                    ctx.beginPath();
                    ctx.moveTo(210 - 11 * t, 105 - 44 * t);
                    ctx.lineTo(210 - 26 * t, 105 - 65 * t);
                    ctx.lineTo(210 + 11 * t, 105 - 44 * t);
                    ctx.closePath();
                    ctx.fill();
                    // Black tip — right ear
                    ctx.beginPath();
                    ctx.moveTo(290 - 11 * t, 105 - 44 * t);
                    ctx.lineTo(290 + 26 * t, 105 - 65 * t);
                    ctx.lineTo(290 + 11 * t, 105 - 44 * t);
                    ctx.closePath();
                    ctx.fill();
                }
            },
            {
                text: "Draw the cute face!",
                voice: "Time for Pikachu's face! Big shiny eyes, a tiny nose, a happy smile, and two round red electric cheeks!",
                draw(ctx, t) {
                    // Left eye
                    ctx.fillStyle = '#2F3542';
                    ctx.beginPath();
                    ctx.arc(222, 148, 12 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Right eye
                    ctx.beginPath();
                    ctx.arc(278, 148, 12 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Eye shines
                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(217, 143, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(273, 143, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Nose
                    ctx.fillStyle = '#2F3542';
                    ctx.beginPath();
                    ctx.arc(250, 163, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Smile
                    ctx.beginPath();
                    ctx.arc(250, 165, 16, Math.PI * 0.1, Math.PI * 0.1 + Math.PI * 0.8 * t);
                    ctx.stroke();
                    // Red cheeks
                    ctx.fillStyle = '#FF4136';
                    ctx.beginPath();
                    ctx.arc(206, 172, 16 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(294, 172, 16 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add arms, legs and stripes!",
                voice: "Pikachu has tiny little arms and stubby legs — so cute! And two brown stripes on the back!",
                draw(ctx, t) {
                    // Left arm
                    ctx.beginPath();
                    ctx.moveTo(200, 252);
                    ctx.lineTo(200 - 32 * t, 252 + 28 * t);
                    ctx.stroke();
                    // Right arm
                    ctx.beginPath();
                    ctx.moveTo(300, 252);
                    ctx.lineTo(300 + 32 * t, 252 + 28 * t);
                    ctx.stroke();
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(225, 318);
                    ctx.lineTo(218, 318 + 32 * t);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(275, 318);
                    ctx.lineTo(282, 318 + 32 * t);
                    ctx.stroke();
                    // Back stripes (two brown lines on body)
                    ctx.beginPath();
                    ctx.moveTo(237, 224);
                    ctx.lineTo(225, 224 + 24 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(263, 224);
                    ctx.lineTo(275, 224 + 24 * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the lightning bolt tail!",
                voice: "Pikachu's tail is a zigzag lightning bolt — just like real electricity! Draw it coming out from behind!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(296, 295);
                    ctx.lineTo(296 + 22 * t, 295 - 28 * t);
                    ctx.lineTo(296 + 12 * t, 295 - 28 * t);
                    ctx.lineTo(296 + 40 * t, 295 - 60 * t);
                    ctx.lineTo(296 + 28 * t, 295 - 60 * t);
                    ctx.lineTo(296 + 58 * t, 295 - 92 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Color Pikachu yellow!", voice: "Pikachu is bright sunshine yellow! Fill in the whole head and body with yellow!", color: '#FFD700' },
            { text: "Paint the ear tips black!", voice: "The tips of Pikachu's ears are black — carefully color just the top tips!", color: '#1a1a1a' },
            { text: "Add the red electric cheeks!", voice: "Pikachu has two big round red cheeks — those store all his electric power!", color: '#FF4136' },
            { text: "Color the lightning tail!", voice: "The tail is bright orange-yellow — color in the whole zigzag lightning bolt!", color: '#FFA500' },
            { text: "Paint the eyes and nose dark!", voice: "Use dark color for the big shiny eyes and the tiny button nose!", color: '#2F3542' },
            { text: "Add brown back stripes!", voice: "Two little brown stripes on Pikachu's back — color them in!", color: '#8B4513' }
        ]
    },
    {
        id: 'nerf_gun',
        name: 'Nerf Blaster',
        emoji: '🎯',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the big blaster body!",
                voice: "Let's draw an awesome Nerf blaster! Start with a big chunky rectangle for the main body — it's the heart of the blaster!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(115, 148, 165 * t, 82);
                    ctx.stroke();
                }
            },
            {
                text: "Add the long barrel!",
                voice: "Time for the barrel — that's where the dart shoots out! Draw a long rectangle pointing right, and a circle at the tip!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(280, 158, 115 * t, 30);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(395, 173, 15 * t, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the handle and trigger guard!",
                voice: "Every blaster needs a handle! Draw the grip going down, then add a curved trigger guard to protect the trigger — just like a real blaster!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(183, 230);
                    ctx.lineTo(176, 230 + 80 * t);
                    ctx.lineTo(216, 230 + 80 * t);
                    ctx.lineTo(228, 230);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(183, 233);
                    ctx.bezierCurveTo(168, 233 + 52 * t, 282, 233 + 52 * t, 282, 233);
                    ctx.stroke();
                }
            },
            {
                text: "Add the top rail and scope!",
                voice: "Nerf blasters have a cool rail on top! Draw a flat rectangle on top of the body, then add a little oval scope — just like a spy gadget!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.rect(120, 132, 155 * t, 17);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(195, 126, 26 * t, 12 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(195, 126, 8 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            },
            {
                text: "Add vents, trigger, and details!",
                voice: "Final touches — add cool vents on the barrel, the trigger inside the guard, grip lines on the handle, and the Nerf logo oval. Your blaster is ready to fire!",
                draw(ctx, t) {
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.moveTo(298 + i * 23, 162);
                        ctx.lineTo(298 + i * 23, 162 + 22 * t);
                        ctx.stroke();
                    }
                    ctx.beginPath();
                    ctx.moveTo(228, 236);
                    ctx.lineTo(242, 236 + 26 * t);
                    ctx.stroke();
                    for (let i = 0; i < 3; i++) {
                        ctx.beginPath();
                        ctx.moveTo(184, 250 + i * 16);
                        ctx.lineTo(184 + 24 * t, 250 + i * 16);
                        ctx.stroke();
                    }
                    ctx.beginPath();
                    ctx.ellipse(210, 190, 32 * t, 14 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the body orange!", voice: "Nerf blasters are famous for bright orange! Fill in the big body with orange!", color: '#FF6600' },
            { text: "Color the barrel yellow!", voice: "Paint the long barrel bright yellow — that's where the dart shoots out!", color: '#FFD700' },
            { text: "Color the top rail yellow!", voice: "Fill in the top rail yellow to match — Nerf loves yellow and orange together!", color: '#FFD700' },
            { text: "Paint the handle dark!", voice: "The grip handle is dark for a cool look — use dark gray or black!", color: '#2F3542' },
            { text: "Add orange to the barrel tip!", voice: "Color the round barrel tip the same bright orange as the body!", color: '#FF6600' },
            { text: "Color the details black!", voice: "Use black for the vents, trigger, grip lines, and the logo oval — nice and sharp!", color: '#1a1a1a' }
        ]
    },
    {
        id: 'goa_beach_memories',
        name: 'Goa beach',
        emoji: '🇮🇳',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the sky and the sea!",
                voice: "Let's go to Goa! First draw a long line where the sky meets the water — that is the horizon! Add some wavy lines in the water!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(20, 145);
                    ctx.lineTo(20 + 460 * t, 145);
                    ctx.stroke();
                    for (let w = 0; w < 3; w++) {
                        const y0 = 165 + w * 32;
                        ctx.beginPath();
                        ctx.moveTo(30, y0);
                        for (let i = 0; i < 6; i++) {
                            const ax = 30 + i * 78 * t;
                            const nx = 30 + (i + 1) * 78 * t;
                            const midx = (ax + nx) / 2;
                            const midy = y0 + 6 * t * (i % 2 === 0 ? 1 : -1);
                            ctx.quadraticCurveTo(midx, midy, nx, y0);
                        }
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Add the warm sandy beach!",
                voice: "Goa is famous for soft sand! Curve a wavy line where the water touches the beach, just like a postcard!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(15, 248);
                    ctx.bezierCurveTo(110, 236 - 10 * t, 390, 256 + 8 * t, 15 + 470 * t, 268);
                    ctx.stroke();
                }
            },
            {
                text: "Write the big word GOA!",
                voice: "It is a picture of Goa — draw the letters G O A nice and big up in the sky, like a fun holiday sign!",
                draw(ctx, t) {
                    const fs = Math.max(0.1, 44 * t);
                    ctx.save();
                    ctx.font = `800 ${fs}px system-ui, sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'alphabetic';
                    ctx.lineWidth = Math.max(1, 4 * t);
                    ctx.strokeText('G O A', 250, 60);
                    ctx.restore();
                }
            },
            {
                text: "Add the sun and more waves!",
                voice: "Draw a big round sun where it shines over the water, and a few more gentle waves in the blue sea!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(415, 60, 26 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    for (const y of [175, 205, 230]) {
                        ctx.beginPath();
                        ctx.moveTo(45, y);
                        ctx.bezierCurveTo(130, y - 6 * t, 200, y + 6 * t, 20 + 430 * t, y);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "A palm and birds in the air!",
                voice: "A tall palm tree sways in Goa! Draw a trunk and wiggly fronds! Put little birds flying like tiny letter V in the sky!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(72, 400);
                    ctx.lineTo(60 + 8 * t, 288);
                    ctx.stroke();
                    const cx = 60;
                    const cy = 278;
                    for (let a = 0; a < 5; a++) {
                        const ang = -0.4 * Math.PI - a * 0.2 * Math.PI - 0.1;
                        const len = 44 * t;
                        ctx.beginPath();
                        ctx.moveTo(cx, cy);
                        ctx.quadraticCurveTo(
                            cx + Math.cos(ang) * len * 0.4,
                            cy + Math.sin(ang) * len * 0.3,
                            cx + Math.cos(ang) * len,
                            cy + Math.sin(ang) * len
                        );
                        ctx.stroke();
                    }
                    const birds = [
                        [200, 85],
                        [255, 72],
                        [315, 88]
                    ];
                    for (const [bx, by] of birds) {
                        ctx.beginPath();
                        ctx.moveTo(bx - 10 * t, by);
                        ctx.quadraticCurveTo(bx, by - 4 * t, bx + 10 * t, by);
                        ctx.stroke();
                    }
                }
            },
            {
                text: "Mumma, Papa, and Nirvan!",
                voice: "The family is on the beach! Draw three happy people with names — Mumma, Papa, and Nirvan — and say hi to the sea!",
                draw(ctx, t) {
                    const fam = [
                        { x: 120, n: 'Mumma' },
                        { x: 250, n: 'Papa' },
                        { x: 380, n: 'Nirvan' }
                    ];
                    for (const { x, n } of fam) {
                        ctx.beginPath();
                        ctx.arc(x, 312, 10 * t, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 322);
                        ctx.lineTo(x, 360 + 8 * t);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 338);
                        ctx.lineTo(x - 18 * t, 352);
                        ctx.moveTo(x, 338);
                        ctx.lineTo(x + 18 * t, 352);
                        ctx.stroke();
                        const fsn = Math.max(0.1, 12 * t);
                        ctx.save();
                        ctx.font = `700 ${fsn}px system-ui, sans-serif`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'top';
                        ctx.lineWidth = Math.max(0.5, 1.5 * t);
                        ctx.strokeText(n, x, 370);
                        ctx.restore();
                    }
                }
            }
        ],
        paintSteps: [
            { text: "Color the warm sunset sky!", voice: "Paint the top part with warm sunset colors — like orange, pink, or light blue!", color: '#FDB99D' },
            { text: "Fill the sea with blue!", voice: "Goa's sea is sparkling! Use happy bright blue in the water below the horizon!", color: '#29B6F6' },
            { text: "Paint the sandy beach!", voice: "Fill the big beach at the bottom with light tan or golden sand color!", color: '#E4CFA1' },
            { text: "Color the big sun yellow!", voice: "Make the sun a bright ball of warm yellow, like a Goa afternoon!", color: '#FFEB3B' },
            { text: "Color the green palm fronds!", voice: "Palm tree leaves are bright green — the trunk is brown if you have another color!", color: '#43A047' },
            { text: "Mumma, Papa, Nirvan, and details!", voice: "Use a darker color for the family, the sea birds, and the GOA letters to finish your postcard picture!", color: '#263238' }
        ]
    },
    {
        id: 'soldier_big_gun',
        name: 'Soldier (Big Gun)',
        emoji: '\u{1FA96}',
        category: 'cartoon',
        steps: [
            {
                text: "Helmet and round face!",
                voice: "Time for a brave adventure hero! Start with a round face and a strong helmet on top, like a toy action figure!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 140, 28 * t, 32 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 108, 40 * t, 24 * t, 0, Math.PI, 0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(218, 120);
                    ctx.lineTo(218 + 64 * t, 120);
                    ctx.stroke();
                }
            },
            {
                text: "Big tough body and vest!",
                voice: "Now add a big oval for the chest and vest — it looks like a padded suit that keeps a soldier safe and ready!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 240, 46 * t, 58 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(200, 195);
                    ctx.lineTo(200 + 50 * t, 195);
                    ctx.moveTo(300, 195);
                    ctx.lineTo(300 - 50 * t, 195);
                    ctx.stroke();
                }
            },
            {
                text: "Sturdy legs and boots!",
                voice: "Let’s add two strong legs marching forward, and big puffy boots at the bottom, like a cartoon paratrooper!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(228, 285);
                    ctx.lineTo(228, 285 + 58 * t);
                    ctx.moveTo(272, 285);
                    ctx.lineTo(272, 285 + 58 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(218, 348, 20 * t, 11 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(282, 348, 20 * t, 11 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }
            },
            {
                text: "A huge long rifle!",
                voice: "This is the star — draw a long rifle with a stock at the back and a super long barrel! Our soldier is holding it like a true hero!",
                draw(ctx, t) {
                    // Stock
                    ctx.beginPath();
                    ctx.moveTo(175, 228);
                    ctx.lineTo(175 + 48 * t, 220);
                    ctx.lineTo(175 + 50 * t, 236);
                    ctx.closePath();
                    ctx.stroke();
                    // Receiver
                    ctx.beginPath();
                    ctx.moveTo(223, 220);
                    ctx.lineTo(223 + 50 * t, 215);
                    ctx.lineTo(223 + 50 * t, 235);
                    ctx.lineTo(223, 240);
                    ctx.closePath();
                    ctx.stroke();
                    // Long barrel + muzzle
                    ctx.beginPath();
                    ctx.moveTo(273, 220);
                    ctx.lineTo(273 + 150 * t, 215);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(423, 213, 8 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Mag / grip
                    ctx.beginPath();
                    ctx.moveTo(248, 240);
                    ctx.lineTo(248, 240 + 28 * t);
                    ctx.moveTo(255, 248);
                    ctx.lineTo(255 - 8 * t, 248);
                    ctx.stroke();
                    // Arms
                    ctx.beginPath();
                    ctx.moveTo(205, 248);
                    ctx.lineTo(205 + 58 * t, 218);
                    ctx.moveTo(300, 258);
                    ctx.lineTo(300 - 48 * t, 228);
                    ctx.stroke();
                }
            },
            {
                text: "Brave face and details!",
                voice: "Add little eyes and a smile under the visor! Draw a belt across the middle so the uniform looks ready for any mission!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.arc(242, 140, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(262, 140, 5 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(252, 150, 3.5 * t, 2 * t, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(252, 160, 10, 0, Math.PI * 0.85 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(205, 252);
                    ctx.lineTo(205 + 90 * t, 252);
                    ctx.stroke();
                }
            },
            {
                text: "Kneepads and last touches!",
                voice: "Finish with kneepads on the legs, a tiny front sight on the big gun, and a pocket line on the chest — you did amazing!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(228, 320, 12 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(272, 320, 12 * t, 8 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(288, 212);
                    ctx.lineTo(288 + 15 * t, 208);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(235, 240);
                    ctx.lineTo(235, 255 + 4 * t);
                    ctx.moveTo(265, 240);
                    ctx.lineTo(265, 255 + 4 * t);
                    ctx.stroke();
                }
            }
        ],
        paintSteps: [
            { text: "Paint the uniform olive green!", voice: "Use olive or army green to fill the helmet, body, and vest — that is a classic adventure uniform!", color: '#4B5F32' },
            { text: "Add tan skin to the face!", voice: "Choose a light peach or tan for the small bit of face under the visor, where the eyes and smile are!", color: '#E8C4A0' },
            { text: "Color the big gun dark gray!", voice: "The rifle and stock are dark metal gray — fill the long barrel, stock, and the boxy middle part!", color: '#5C6670' },
            { text: "Black boots and belt!", voice: "Color the big boots and the belt line with a deep black or dark brown so they look tough!", color: '#1E2329' },
            { text: "Paint the visor and kneepads!", voice: "Use a slightly different green or dark gray for the visor line and the kneepads, so the outfit pops a little!", color: '#3A4728' },
            { text: "Bright eyes and smile line!", voice: "Use a dark color for the eyes, mouth, and the tiny details on the gun, so the hero can see you smile back!", color: '#2A2A2A' }
        ]
    },
    {
        id: 'nirvan_diwali_family',
        name: "Nirvan's Diwali with family",
        emoji: '🪔',
        category: 'cartoon',
        steps: [
            {
                text: 'The Diwali night sky and floor!',
                voice: "Shubh Diwali! Let's start with a soft line for the floor, the dark sky above, and a few twinkly stars like real Diwali night — so magical!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.moveTo(15, 100);
                    ctx.lineTo(15 + 470 * t, 100);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(10, 300);
                    ctx.bezierCurveTo(130, 292, 360, 308, 10 + 480 * t, 300);
                    ctx.stroke();
                    const st = [
                        [80, 64],
                        [200, 48],
                        [340, 56],
                        [420, 40]
                    ];
                    for (const [sx, sy] of st) {
                        ctx.beginPath();
                        ctx.moveTo(sx, sy);
                        ctx.lineTo(sx + 2 * t, sy - 3 * t);
                        ctx.lineTo(sx + 4 * t, sy);
                        ctx.lineTo(sx + 2 * t, sy + 2.5 * t);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            },
            {
                text: 'A row of family up high!',
                voice: "At the back are lots of people who love you! Draw seven small round heads in a row — that is part of your big family tree cheering for Diwali!",
                draw(ctx, t) {
                    const xs = [55, 115, 175, 235, 300, 365, 430];
                    for (const bx of xs) {
                        ctx.beginPath();
                        ctx.arc(bx, 120, 8.5 * t, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
            },
            {
                text: 'More relatives in the middle!',
                voice: "Closer up come more cousins and grown-ups! A second row of simple stick bodies under those heads, like a big happy crowd at home for Diwali!",
                draw(ctx, t) {
                    const mid = [115, 175, 250, 325, 400];
                    for (const x of mid) {
                        ctx.beginPath();
                        ctx.arc(x, 170, 10 * t, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 180);
                        ctx.lineTo(x, 235 + 15 * t);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 200);
                        ctx.lineTo(x - 18 * t, 218);
                        ctx.moveTo(x, 200);
                        ctx.lineTo(x + 18 * t, 218);
                        ctx.stroke();
                    }
                }
            },
            {
                text: 'Mumma, Papa, and Nirvan!',
                voice: "Right in front, draw the three stars of the day — a bigger Nirvan in the middle, Mumma on one side, Papa on the other, all dressed up to celebrate together!",
                draw(ctx, t) {
                    for (const [x, w] of [
                        [150, 12],
                        [250, 16],
                        [350, 12]
                    ]) {
                        ctx.beginPath();
                        ctx.ellipse(x, 205, w * t, (w * 0.9) * t, 0, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 215 + w * 0.1 * t);
                        ctx.lineTo(x, 268 + 25 * t);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 240);
                        ctx.lineTo(x - 22 * t, 255);
                        ctx.moveTo(x, 240);
                        ctx.lineTo(x + 22 * t, 255);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(x, 280);
                        ctx.lineTo(x - 12 * t, 300);
                        ctx.moveTo(x, 280);
                        ctx.lineTo(x + 12 * t, 300);
                        ctx.stroke();
                    }
                }
            },
            {
                text: 'Diyas, lights, and sparkles!',
                voice: "Diwali is the festival of lights! Add a big clay diya in front, a bouncy little flame, swirly string lights, and a star burst like a safe, happy firework!",
                draw(ctx, t) {
                    ctx.beginPath();
                    ctx.ellipse(250, 322, 38 * t, 14 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(250, 300, 14 * t, 18 * t, 0, Math.PI, 0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(250, 282);
                    ctx.lineTo(250, 272 - 22 * t);
                    ctx.stroke();
                    for (const ang of [0, 0.4, 0.8, 1.2, 1.5]) {
                        ctx.beginPath();
                        ctx.moveTo(250 + Math.cos(ang) * 8 * t, 272 - 22 * t);
                        ctx.lineTo(250 + Math.cos(ang) * 18 * t, 262 - 32 * t);
                        ctx.stroke();
                    }
                    for (const dx of [110, 390]) {
                        ctx.beginPath();
                        ctx.ellipse(dx, 335, 9 * t, 5 * t, 0, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.moveTo(dx, 328);
                        ctx.lineTo(dx, 318 - 10 * t);
                        ctx.stroke();
                    }
                    ctx.beginPath();
                    ctx.moveTo(30, 85);
                    for (let i = 0; i < 7; i++) {
                        const px = 30 + i * 64 * t;
                        ctx.lineTo(px, 80 + 6 * t * (i % 2));
                    }
                    ctx.lineTo(30 + 6 * 64 * t, 80);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(470, 82);
                    ctx.lineTo(470 - 20 * t, 72);
                    ctx.moveTo(470, 82);
                    ctx.lineTo(460 - 15 * t, 90);
                    ctx.moveTo(470, 82);
                    ctx.lineTo(455 - 5 * t, 78);
                    ctx.stroke();
                }
            },
            {
                text: 'Smiles and the whole family list!',
                voice: "Add sweet dot eyes and smiles! Then read the names: Dadu, Dadi, Bade Papa, Prisha, D two, Badi Mammi, Mumma, Papa, and everyone you love. Happy Diwali, Nirvan!",
                draw(ctx, t) {
                    for (const [x, ey, sy] of [
                        [150, 198, 212],
                        [250, 198, 215],
                        [350, 198, 212]
                    ]) {
                        ctx.beginPath();
                        ctx.arc(x - 4, ey, 3.5 * t, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.arc(x + 4, ey, 3.5 * t, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.arc(x, sy, 5 * t, 0, Math.PI * 0.95 * t);
                        ctx.stroke();
                    }
                    const fsn = Math.max(0.1, 7.5 * t);
                    const lines = [
                        'Dadu, Dadi, Bade Papa, Prisha, D2, Badi Mammi,',
                        'Mumma, Papa, Kunnu Mamu, Mishu Mami, Nanu, Nani,',
                        'Chotu Chachu, Siya Chachi, and Veer — Shubh Diwali!'
                    ];
                    ctx.save();
                    ctx.font = `600 ${fsn}px system-ui, sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'top';
                    ctx.lineWidth = Math.max(0.2, 0.8 * t);
                    for (let i = 0; i < lines.length; i++) {
                        ctx.strokeText(lines[i], 250, 358 + i * 12 * 0.85);
                    }
                    ctx.restore();
                }
            }
        ],
        paintSteps: [
            {
                text: 'Color the night sky and stars!',
                voice: "Start with a deep indigo or purple for the top sky — the stars and lights will glow on it like real Diwali night!",
                color: '#1A237E'
            },
            {
                text: 'Fill the ground deep brown!',
                voice: "The floor in front is a warm deep brown, like a cozy home courtyard where everyone stands together to celebrate.",
                color: '#4E342E'
            },
            {
                text: 'Color kurta, dupattas, and Nirvan!',
                voice: "Use bright saffron, peacock blue, and festive pinks and greens for the rows of clothes and Nirvan's special outfit in the center!",
                color: '#E53935'
            },
            {
                text: 'Add golden clay diyas and oil!',
                voice: "Diyas are warm earthen brown or orange clay — fill the bowls, then leave a puddle of yellow-gold in each for the oil, like real lamps on Diwali night!",
                color: '#C87E4B'
            },
            {
                text: 'Flames and string lights — yellow, orange!',
                voice: "The flames are happy orange and yellow! Add gold on the string lights in the sky — think of your whole family, including Prisha, D2, and Veer, glowing together with you!",
                color: '#FFCA28'
            },
            {
                text: "Skin, smiles, and the names line!",
                voice: "Add warm skin for faces, a soft bindi or tilak on Nirvan, and a dark line over the names: Dadu, Dadi, Bade Papa, Badi Mammi, Kunnu Mamu, Mishu Mami, Nanu, Nani, Chotu Chachu, and Siya Chachi — the whole list — Happy Diwali!",
                color: '#2F3542'
            }
        ]
    },
    {
        id: 'police_bike_chase',
        name: 'Police Bike Chase',
        emoji: '👮',
        category: 'cartoon',
        steps: [
            {
                text: "Draw the big bicycle wheels!",
                voice: "Zoom zoom! Let's draw a super fast police bicycle! Start with two big round wheels — make them nice and round like donuts!",
                draw(ctx, t) {
                    ctx.lineWidth = 3;
                    // Rear wheel
                    ctx.beginPath();
                    ctx.arc(125, 280, 38 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Rear hub
                    ctx.beginPath();
                    ctx.arc(125, 280, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Front wheel
                    ctx.beginPath();
                    ctx.arc(248, 280, 38 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Front hub
                    ctx.beginPath();
                    ctx.arc(248, 280, 5 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.lineWidth = 1;
                }
            },
            {
                text: "Connect the wheels with a frame!",
                voice: "Time to build the bicycle frame! Draw the triangle shape in the middle, the fork at the front, and the handlebars on top!",
                draw(ctx, t) {
                    ctx.lineWidth = 2.5;
                    // Main triangle: seat-top to bottom-bracket
                    ctx.beginPath();
                    ctx.moveTo(168, 235);
                    ctx.lineTo(168 + (192 - 168) * t, 235 + (280 - 235) * t);
                    ctx.stroke();
                    // Bottom bracket to head tube
                    ctx.beginPath();
                    ctx.moveTo(192, 280);
                    ctx.lineTo(192 + (242 - 192) * t, 280 + (243 - 280) * t);
                    ctx.stroke();
                    // Top tube (seat to head tube)
                    ctx.beginPath();
                    ctx.moveTo(168, 235);
                    ctx.lineTo(168 + (242 - 168) * t, 235 + (243 - 235) * t);
                    ctx.stroke();
                    // Chain stay (BB to rear axle)
                    ctx.beginPath();
                    ctx.moveTo(192, 280);
                    ctx.lineTo(192 + (125 - 192) * t, 280);
                    ctx.stroke();
                    // Seat stay (seat-top to rear axle)
                    ctx.beginPath();
                    ctx.moveTo(168, 235);
                    ctx.lineTo(168 + (125 - 168) * t, 235 + (280 - 235) * t);
                    ctx.stroke();
                    // Fork (head tube to front axle)
                    ctx.beginPath();
                    ctx.moveTo(242, 243);
                    ctx.lineTo(242, 243 + (280 - 243) * t);
                    ctx.stroke();
                    // Handlebar post
                    ctx.beginPath();
                    ctx.moveTo(242, 243);
                    ctx.lineTo(242, 243 - 24 * t);
                    ctx.stroke();
                    // Handlebar horizontal
                    ctx.beginPath();
                    ctx.moveTo(232, 219);
                    ctx.lineTo(232 + 20 * t, 219);
                    ctx.stroke();
                    // Seat horizontal
                    ctx.beginPath();
                    ctx.moveTo(155, 232);
                    ctx.lineTo(155 + 26 * t, 232);
                    ctx.stroke();
                    ctx.lineWidth = 1;
                }
            },
            {
                text: "Add the policeman riding the bike!",
                voice: "Here comes our brave police officer! Draw the body leaning forward on the bike, with arms reaching the handlebars and legs pedaling fast!",
                draw(ctx, t) {
                    // Torso leaning forward
                    ctx.beginPath();
                    ctx.ellipse(192, 215, 20 * t, 26 * t, -0.3, 0, Math.PI * 2);
                    ctx.stroke();
                    // Right arm to handlebar
                    ctx.beginPath();
                    ctx.moveTo(206, 205);
                    ctx.lineTo(206 + (240 - 206) * t, 205 + (222 - 205) * t);
                    ctx.stroke();
                    // Left arm to handlebar
                    ctx.beginPath();
                    ctx.moveTo(200, 202);
                    ctx.lineTo(200 + (230 - 200) * t, 202 + (222 - 202) * t);
                    ctx.stroke();
                    // Front leg (pedaling forward and down)
                    ctx.beginPath();
                    ctx.moveTo(190, 234);
                    ctx.lineTo(190 + (208 - 190) * t, 234 + (274 - 234) * t);
                    ctx.stroke();
                    // Back leg (pedaling up behind)
                    ctx.beginPath();
                    ctx.moveTo(184, 232);
                    ctx.lineTo(184 + (162 - 184) * t, 232 + (256 - 232) * t);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the police hat and face!",
                voice: "Every police officer needs their special hat! Draw a round head, then add the peaked cap with a wide brim — and don't forget the shiny badge on the chest!",
                draw(ctx, t) {
                    // Head
                    ctx.beginPath();
                    ctx.arc(172, 183, 22 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hat brim
                    ctx.beginPath();
                    ctx.ellipse(172, 163, 28 * t, 5 * t, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // Hat dome (upper half ellipse)
                    ctx.beginPath();
                    ctx.ellipse(172, 163, 22 * t, 15 * t, 0, Math.PI, Math.PI * 2);
                    ctx.stroke();
                    // Eyes
                    ctx.beginPath();
                    ctx.arc(166, 184, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(178, 184, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Smile
                    ctx.beginPath();
                    ctx.arc(172, 189, 7, 0.1, 0.1 + Math.PI * 0.8 * t);
                    ctx.stroke();
                    // Badge circle on chest
                    ctx.beginPath();
                    ctx.arc(196, 218, 6 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Badge cross lines
                    ctx.beginPath();
                    ctx.moveTo(196, 212);
                    ctx.lineTo(196, 212 + 12 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(190, 218);
                    ctx.lineTo(190 + 12 * t, 218);
                    ctx.stroke();
                }
            },
            {
                text: "Draw the sneaky thief running away!",
                voice: "Oh no, a thief is running away with a bag! Draw a little running figure on the right — with a round head, a body leaning forward, and two legs taking big steps!",
                draw(ctx, t) {
                    // Thief head
                    ctx.beginPath();
                    ctx.arc(400, 175, 18 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Body leaning forward
                    ctx.beginPath();
                    ctx.ellipse(400, 213, 14 * t, 20 * t, 0.2, 0, Math.PI * 2);
                    ctx.stroke();
                    // Front arm (stretched forward holding bag)
                    ctx.beginPath();
                    ctx.moveTo(412, 205);
                    ctx.lineTo(412 + (438 - 412) * t, 205 + (192 - 205) * t);
                    ctx.stroke();
                    // Money bag
                    ctx.beginPath();
                    ctx.arc(448, 188, 14 * t, 0, Math.PI * 2);
                    ctx.stroke();
                    // Back arm (swinging behind)
                    ctx.beginPath();
                    ctx.moveTo(388, 208);
                    ctx.lineTo(388 + (368 - 388) * t, 208 + (200 - 208) * t);
                    ctx.stroke();
                    // Front leg (stepping forward)
                    ctx.beginPath();
                    ctx.moveTo(393, 230);
                    ctx.lineTo(393 + (370 - 393) * t, 230 + (278 - 230) * t);
                    ctx.stroke();
                    // Back leg (kicked up behind)
                    ctx.beginPath();
                    ctx.moveTo(407, 230);
                    ctx.lineTo(407 + (430 - 407) * t, 230 + (255 - 230) * t);
                    ctx.stroke();
                }
            },
            {
                text: "Add zoom lines and action details!",
                voice: "Let's make it look super fast and exciting! Draw zoom lines behind the bike, a sneaky mask on the thief, and a dollar sign on the bag!",
                draw(ctx, t) {
                    // Speed lines to the left of the bike
                    [[18, 262], [5, 278], [20, 294], [8, 308]].forEach(([x, y]) => {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + 52 * t, y);
                        ctx.stroke();
                    });
                    // Thief bandit mask (upper half of face)
                    ctx.beginPath();
                    ctx.ellipse(400, 173, 19 * t, 10 * t, 0, Math.PI, Math.PI * 2);
                    ctx.stroke();
                    // Mask eye holes
                    ctx.beginPath();
                    ctx.arc(392, 173, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(408, 173, 4 * t, 0, Math.PI * 2);
                    ctx.fill();
                    // Dollar sign vertical bar
                    ctx.beginPath();
                    ctx.moveTo(448, 180);
                    ctx.lineTo(448, 180 + 16 * t);
                    ctx.stroke();
                    // Action exclamation mark
                    ctx.beginPath();
                    ctx.moveTo(310, 148);
                    ctx.lineTo(310, 148 + 22 * t);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(310, 176, 3 * t, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        ],
        paintSteps: [
            {
                text: "Color the police uniform blue!",
                voice: "Police officers wear dark blue uniforms — fill in the policeman's body, hat, and legs with dark blue!",
                color: '#1565C0'
            },
            {
                text: "Paint the bicycle gray!",
                voice: "Bicycles have shiny metal frames — color the wheels and the frame with cool silver gray!",
                color: '#757575'
            },
            {
                text: "Color the thief's clothes dark!",
                voice: "The sneaky thief wears dark clothes so nobody can see him — fill in his body with dark gray!",
                color: '#37474F'
            },
            {
                text: "Paint the money bag gold!",
                voice: "That thief is carrying a big bag of gold coins — color it shiny bright yellow!",
                color: '#FFD700'
            },
            {
                text: "Add skin color to the faces!",
                voice: "Color both the policeman's and the thief's faces with a warm peach color!",
                color: '#FFCC80'
            },
            {
                text: "Color the police badge yellow!",
                voice: "The police badge is shiny gold — color that little star shape on the policeman's chest!",
                color: '#FFC107'
            }
        ]
    }
];
