import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Input } from "antd";


export default function Help()
{
    return(
        <Page>
              <PageHeader title="TalipaAPP Help Center" />
              <div className="flex">
                <div className="flex grow pt-2">
                <Input type="text" className="rounded-lg " /> 
                </div>
              </div>

              <div className="flex">
              <div className="flex grow font-bold p-2 text-xl">
                    <p>Self-Service</p>
                </div>
              </div>

              <div className="flex">
              <div className="flex grow font-bold p-2 text-xl">
                    <p>Hot Questions</p>
                </div>
              </div>
                <div className="flex grow pl-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

              <div className="flex grow pl-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex grow pl-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex grow pl-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex grow pl-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex grow pl-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

              <div className="flex">
              <div className="flex grow font-bold p-2 text-xl">
                    <p>Do You Have Any Other Question?</p>
                </div>
              </div>

              <div className="flex grow pl-2">
                    <p>Chat</p>
                </div>
        </Page>
    );
}
