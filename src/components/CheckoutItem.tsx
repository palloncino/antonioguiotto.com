import { useEffect, useState } from "react";
import "./CheckoutItem.css";

const CheckoutItem = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');

  useEffect(() => {
    if (step > 1) {
      // check JWT from cookies, if expired, back to step 0
    }
  }, [step])

  const renderStep0 = () => {
    return (
      <button onClick={() => setStep(1)}>Checkout Item</button>
    )
  }

  const renderStep1 = () => {
    return (
      <div>
        <div>
          <h3>
            Step 1 - Login
          </h3>
          <p>
            To authenticate, write your email so we can send you a auth code. Once you receive the code post it to the next auth code input.
          </p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="submit" value="Receive code" />
        </div>
        <button onClick={() => setStep(0)}>Go back to step 0</button>
        <button onClick={() => setStep(2)}>Go to step 2</button>
      </div>
    )
  }

  const renderStep2 = () => {
    return (
      <div>
        <div>
          <h3>
            Step 2 - Auth Code
          </h3>
          <p>
            Check your inbox for an authentication code, insert the auth code and submit to authenticate.
          </p>
          <input type="text" onChange={(e) => setAuthCode(e.target.value)} />
          <input type="submit" value="Submit" />
        </div>
        <button onClick={() => setStep(1)}>Go back to step 1</button>
        <button onClick={() => setStep(3)}>Go to step 3</button>
      </div>
    )
  }

  const renderStep3 = () => {
    return (
      <div>
        <div>
          <h3>
            Step 3 - Google address
          </h3>
          <p>
            Shipping address, where do I ship this item?
          </p>
          <input type="text" onChange={(e) => setAuthCode(e.target.value)} />
          <input type="submit" value="Submit" />
        </div>
        <button onClick={() => setStep(2)}>Go back to step 2</button>
        <button onClick={() => setStep(4)}>Go to step 4</button>
      </div>
    )
  }

  const renderStep4 = () => {
    return (
      <div>
        
        TODO step 4
      </div>
    )
  }

  const renderCheckoutStep = () => {
    switch (step) {
      case 0:
        return renderStep0();

      case 1:
        return renderStep1();

      case 2:
        return renderStep2();

      case 3:
        return renderStep3();

      case 4:
        return renderStep4();

      default:
        break;
    }
  }

  return (
    <div>
      {renderCheckoutStep()}
    </div>

  )
};

export default CheckoutItem;