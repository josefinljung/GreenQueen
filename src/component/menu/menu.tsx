import React from 'react';
import BounceImage from '../../assets/bounce-image.png';

export default function Menu (){
    return(

        <React.Fragment>
            <img src={BounceImage} id="startpage"/>
            
    
    <div className="menu-container">  
    <h1 className="menu">MENU</h1>
        <h4 id="menu-h4">Spicy corn and chick pea burger (Vegansk) </h4> 
            <p>Vegansk hamburgare av majs och kikärtor på glutenfritt bröd med tomat, saltgurka, och syrad rödlök.
            Serveras med coleslaw, sallad, tomatdressing och tortillachips.</p>
        <h4 id="menu-h4">BBQ marinated pulled Vegme burger (Vegansk)</h4>
            <p>Vegansk hamburgare meed BBQ-marinerad pulled Vegme på glutenfritt bröd med tomat, saltgurka, rostad lök och syrad rödlök.
            Serveras med coleslaw, sallad, tomatdressing och tortillachips (GMO Free soy protein)</p>
        <h4 id="menu-h4"> VEGAN ”SLOPPY JOE” (Vegansk)</h4>
            <p>Mexikansk kryddig chilifärsröra i pitabröd med tomat, picklad jalapeno, rostad lök, koriander, tortillachips and tomatsalsa.
            (GMO Free soy protein)</p>
        <h4 id="menu-h4">VEGAN KEBAB IN PITA (Vegansk)</h4>
            <p>Kryddmarinerad Vegme, sallad, syrad rödlök, tomatsalsa, vitlökssås och syrad kål.
            (GMO Free soy protein)</p>
        <h4 id="menu-h4">HALLOUMI-QUESADILLA</h4>
            <p>Grillad glutenfri tortilla med halloumi, oliver, chili, hummus, och sallad med tomatdressing.</p>
        <h4 id="menu-h4">SPICY FETA CHEESE QUESADILLA</h4>
            <p>Grillad glutenfri tortilla med fårost, fermenterad chili, rostad sötpotatis, hummus och sallad med tomatderssing.</p>
        <h4 id="menu-h4">VEGAN QUESADILLA (Vegansk)</h4>
            <p>Grillad glutenfri tortilla med sötpotatis, paprika, oliver, picklad jalapeno, hummus och
            sallad med tomatdressing.</p>
        <h4 id="menu-h4">GRILLED BREAD SMASHED AVOCADO (Vegansk)</h4>
            <p>Grillat bröd med avokadoröra, syrad lök, sallad och chilisås.
            Samt liten sallad med tomatsalsa.</p>
        <h4 id="menu-h4">GRILLED BREAD MUSHROOM, ONIONS and TRUFFLE  OIL (Vegansk)</h4>
            <p>Grillat bröd med stekt svamp och lök, tryffelolja,
            Samt liten sallad med tomatsalsa.</p>
    </div>
    </React.Fragment>
    )
}