// components
import { Icon } from "../icon/Icon";

// Portfolio
import { Portfolio } from "@/models/Portfolio";

export const ConnectionIcons: React.FC = async () => {

  const user = await Portfolio.getUser();
  const contacts = user.getContacts();

  return (
    <nav>
      <div className="section flex justify-center pb-2">
        <div className="grid grid-rows-1 grid-cols-4 gap-y-2 md:gap-y-4 text-center justify-center w-2/3 md:w-2/5">
          {contacts.map((contact) => {
            return (
              <a
                key={`footer_icon_${contact.name}`}
                className="flex justify-center"
                target={contact.target}
                href={contact.href}
              >
                <div className="iconLinkContainer socialMediaIconSm">
                  <Icon
                    id={contact.name}
                    isLink={true}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  )
}
