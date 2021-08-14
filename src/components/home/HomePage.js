import { Button, Layout, Breadcrumb } from "antd";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {MenuListPage} from "../menu-list/MenuListPage";

const { Content } = Layout;

function HomePage() {
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        window.addEventListener('storage', () => {
            setSubscribed(localStorage.getItem("isSubscribed"))
        });
    }, []);

    useEffect(() => {
        if (!subscribed) {
            setSubscribed(false);
        } else {
            setSubscribed(true);
        }
    }, [subscribed])

    if (!subscribed) {
        return <MenuListPage/>
    } else {
        return (
            <div className="w-full h-full text-2xl">
                <div className="bg-white mx-auto p-5">
                    <div className="text-center mt-8">คุณยังไม่ได้ subscribe</div>
                    <Link to="/create-package">
                        <Button className="w-full bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-none mt-8 rounded-lg hover:bg-yellow-600">
                            ไป subscribe
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
