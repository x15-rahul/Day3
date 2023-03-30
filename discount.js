/* 
    first100Ticket = 80;
    second100Ticket = 70;
    restTicket = 50;
*/

const first100TicketPrice = 80;
const second100TicketPrice = 70;
const restTicketPrice = 50;

function getTotalPrice(ticketQuantity){
    let first100TicketTotal, second100TicketTotal, restTicketTotal, totalTicketPrice;

    if(ticketQuantity <= 100){
        totalTicketPrice = first100TicketPrice * ticketQuantity;
        return totalTicketPrice;
    } 
    
    else if (ticketQuantity <= 200){
        first100TicketTotal = first100TicketPrice * 100;
        second100TicketTotal = (ticketQuantity - 100) * second100TicketPrice;
        totalTicketPrice = first100TicketTotal + second100TicketTotal;
        return totalTicketPrice;
    } 
    
    else {
        first100TicketTotal = first100TicketPrice * 100;
        second100TicketTotal = second100TicketPrice * 100;
        restTicketTotal = (ticketQuantity - 200) * restTicketPrice;
        totalTicketPrice = first100TicketTotal + second100TicketTotal + restTicketTotal;
        return totalTicketPrice;
    }
}

const totalPrice = getTotalPrice(205);
console.log(totalPrice);