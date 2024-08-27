import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../ui/form";
import { Input } from "../ui/input";
import useWebSocket from 'react-use-websocket/dist/index';

const formSchema = z.object({
    inipos: z
    .string({
        required_error: "Initial positions are required"
    })
    .length(14, {
        message: "There must be 5 characters only",
    })
    .includes("H1", {
        message: "There must be at least 1 Hero1"
    })
    .includes("H2", {
        message: "There must be at least 1 Hero2"
    })
})

export const JoiningForm = () => {
    const WS_URL = 'ws://127.0.0.1:3000';
    let clientID: string | null = null;
    let gameID: string | null = null;
    
    const {sendJsonMessage} = useWebSocket(WS_URL, {
        onOpen: () => {
        console.log('WebSocket connection established.');
        },
        onMessage: (message) => {
            const response = JSON.parse(message.data);
            console.log(response);
            if (response.method === "connect") {
                clientID = response.client;
                gameID = response.game;
                console.log('client created'+clientID);
            }

            if (response.method === "join") {
                const payLoad = {
                    "method": "join",
                    "clientId": clientID,
                    "gameId": gameID
                }
                sendJsonMessage(payLoad);
                console.log("game")
            }
        }
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            inipos: "",
        },
    });
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="inipos"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Starting positions</FormLabel>
                            <FormControl>
                                <Input placeholder="P1 P2 H1 H2 P3" {...field} />
                            </FormControl>
                            <FormDescription>Write the character names in the order you like seperated by spaces.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" onClick={() => {
                    if (!gameID) {
                        const payLoad = {
                            "method": "create",
                            "clientId": clientID,
                            "gameId": gameID
                        }
                        sendJsonMessage(payLoad);
                    }
                    else {
                        const payLoad = {
                            "method": "join",
                            "clientId": clientID,
                            "gameId": gameID
                        }
                        sendJsonMessage(payLoad);
                        console.log("game")
                    }    
                }}>Let's Go!</Button>
            </form>
        </Form>
    )
}