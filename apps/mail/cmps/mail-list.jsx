import { MailPreview } from "./mail-preview";

export function MailList() {

    return  <ul className="car-list">
    {
        mails.map(mail => <li key={mail.id}>
            <MailPreview mail={mail} />
            <div>
                {/* <button onClick={() => onRemoveCar(car.id)}>Remove car!</button>
                <button onClick={() => onSelectCar(car.id)}>Select car!</button> */}
            </div>
        </li>)
    }
</ul>
    

}
