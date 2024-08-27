import { Header } from "../components/header";
import { PlayerGrid } from "../components/player-grid";
import { WebsocketConnector } from "../lib/websocket-connector";

export const MainPage = () => {
    return (
        <>
            <div className="flex h-screen flex-col">
                <Header />
                <div className="flex w-screen">
                    <div className="w-full flex flex-col py-20 justify-center gap-5 items-center border-t-2 border-t-accent">
                        <PlayerGrid websocket={WebsocketConnector} gameState={} />
                    </div>

                </div>
            </div>
        </>
    )
}