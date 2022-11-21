import { createContext, useContext } from "react";

interface TicketContext {
    from: string | undefined;
    to: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    setFrom: (e:string) => void;
    setTo: (e:string) => void;
    setStartDate: (e:string) => void;
    setEndDate: (e:string) => void;
}

export const TicketContext = createContext<TicketContext>({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    setFrom: (e) => {},
    setTo: (e) => {},
    setStartDate: (e) => {},
    setEndDate: (e) => {},
});
