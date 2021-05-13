let movelist = []
movelist.push(new Move("Lead Punch / 'Jab'"))
movelist.push(new Move("Rear Punch / 'Cross'"))
movelist.push(new Move("Lead Forearm-shiver"))
movelist.push(new Move("Turning Bottomfist"))
movelist.push(new Move("Lead Chop to Groin"))
movelist.push(new Move("(hooking) Lead Ridge Hand"))

movelist.push(new Move("Lead Elbowstrike"))
movelist.push(new Move("Rear Elbowstrike"))
movelist.push(new Move("Lead Rising-elbow"))
movelist.push(new Move("Turning Falling-elbow"))

//movelist.push(new Move("Lead Elbowstrike"))
movelist.push(new Move("Turning Back-elbowstrike"))
//movelist.push(new Move("(Returning) Rear Rising-elbow"))
//movelist.push(new Move("Rear Elbowstrike"))

movelist.push(new Move("Lead Sidekick"))
movelist.push(new Move("Back-turning Sidekick"))
////movelist.push(new Move("Back-turning Sidekick")) # 360
movelist.push(new Move("Shuttlekick"))

movelist.push(new Move("Lead Roundhouse"))
movelist.push(new Move("Rear Roundhouse"))
//movelist.push(new Move("Rear Full-Roundhouse")) # 360
movelist.push(new Move("Naraebang"))

movelist.push(new Move("Lead Snapkick"))
movelist.push(new Move("Rear Thrustkick"))
movelist.push(new Move("Scissors Thrustkick"))
movelist.push(new Move("Backturnslide into Lead Thrustkick"))

// === === === STEPHANIE SIU'S COMBOS === === === //

movelist.push(new Move("Downblock = Low In-to-out block"))
movelist.push(new Move("In-to-out block"))
//movelist.push(new Move("Elbowstrike"))
movelist.push(new Move("Kneeup"))

//movelist.push(new Move("Downblock = Low In-to-out block"))
//movelist.push(new Move("Rear Punch / 'Cross'"))
//movelist.push(new Move("Lead Punch / 'Jab'"))

//movelist.push(new Move("Lead Punch / 'Jab'"))
//movelist.push(new Move("Rear Punch / 'Cross'"))
movelist.push(new Move("Low Lead Chop-Roundhouse Kick"))

movelist.push(new Move("Low Out-to-in block = 'Y-block'"))
movelist.push(new Move("Lead back knuckle = 'Asp Strike'"))
movelist.push(new Move("Lead Hammerstrike to groin"))
//movelist.push(new Move("Turning Bottomfist"))

movelist.push(new Move("Upperblock / Tentblock"))
movelist.push(new Move("Falling hammerstrike"))
movelist.push(new Move("Rear Oxjaw"))

//movelist.push(new Move("In-to-out block"))
movelist.push(new Move("Rear Ridgehand"))

/// From two people grabbing you
movelist.push(new Move("Instep (sweeping) kick"))
//movelist.push(new Move("Lead Sidekick"))
//movelist.push(new Move("Elbow-uppercut")) # Cinching grabber's hand to your wrist before elbow rotating

/// === === Stephanie Siu's softblock combos === === ///
movelist.push(new Move("Lead out-to-in block"))
//movelist.push(new Move("Rear In-to-out block"))
//movelist.push(new Move("Lead Round Punch / 'Hook'"))

//movelist.push(new Move("Lead out-to-in block"))
//movelist.push(new Move("Rear In-to-out block"))
movelist.push(new Move("Lead Minor inner sweep"))

//movelist.push(new Move("Lead out-to-in block"))
//movelist.push(new Move("Rear In-to-out block"))
//movelist.push(new Move("Lead trip like kneewheel"))

//movelist.push(new Move("Lead out-to-in block"))
//movelist.push(new Move("Rear In-to-out block"))
movelist.push(new Move("'Lightning bolt' = Lead Chop to crook of neck"))
movelist.push(new Move("Kneeup"))
movelist.push(new Move("(Bend them down into) Lead Kneeup-to-face"))

//movelist.push(new Move("In-to-out block"))
// Grab and pull 'em in to
movelist.push(new Move("Chop-roundhouse Kneeup"))

////movelist.push(new Move("In-to-out block"))
movelist.push(new Move("Tigerjaw Strike = ridgehand with thumb opened"))
movelist.push(new Move("Eye gouge = palmheel with fingers splayed"))

movelist.push(new Move("Instep (sweeping) kick"))
movelist.push(new Move("Low Lead Shoot-Roundhouse kick / 'Circlekick' / 'Curbkick'"))
movelist.push(new Move("Two-step sidekick"))

//movelist.push(new Move("In-to-out block"))
movelist.push(new Move("Palmheel (to jaw)"))
movelist.push(new Move("Major outer reap"))

movelist.push(new Move("Low (=shin scraping) Sidekick"))
movelist.push(new Move("Slide (Newton's cradle style) Sidekick"))

movelist.push(new Move("Axekick"))
movelist.push(new Move("Jump turning sidekick"))

//movelist.push(new Move("Roundhouse"))
//movelist.push(new Move("Naraebang"))

//movelist.push(new Move("Out-to-in block"))
movelist.push(new Move("Uppercut"))
movelist.push(new Move("Shoulder throw"))

// === === Master Commins' Combos 5/12/21 === === //
// Rear Frontkick, in-to-out downblock, rear frontpunch
// Rear Frontkick, lead frontpunch
// Low roundhouse, middle roundhouse, high roundhouse,

// === Dr. Link Combo 4/12/21 === //
// Jab, Frontkick, Turning Kick, Backturning Strike, Reverse punch

// === Ashis 4/5/21 === //
// Hook, turning bottomfist, hook, turning Bottomfist
// lead roundhouse, turning backkick, reverse punch, lead roundhouse, turning backkick, reverse punch
// neoblock, [lead punch], turning bottomfist, low out-to-in, high in-to-out, neoblock, [lead punch], turning bottomfist, low out-to-in, high in-to-out
// === Jackie 4/5/21 === //
// Pushkick, [downblock to hop offline], roundhouse, backkick
// [downblock to hop offline], front kick, [downblock to step lead leg around to retreat and], back kick

// === Dr. Link 2/7/21 === //
// Jab, Cross, Knee lift, Backkick
// Jab, Cross, Knee lift, clearing hammerfist

function flipNewCard() {
  //let thisTarget = deck[curCard][1];
  for(var ii = 0; ii<4 ; ii++){
    let randomIndex = Math.floor(Math.random() * movelist.length);
    let thisMove = movelist[randomIndex]
    stepText[ii].text = thisMove.name
  }
}
