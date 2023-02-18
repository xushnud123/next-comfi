import cx from 'classnames';
// import { Helmet } from 'react-helmet-async';
// import { helmetJsonLdProp } from 'react-schemaorg';
// import { FAQPage } from 'schema-dts';

import { FAQSchema } from '@/helpers/constants';

import { Accordion } from '@/components';
import { Next } from '@/components/icons';

import cls from './faq.module.scss';

const FAQ = () => (
  <>
    {/* {
      // @ts-ignore
      <Helmet script={[helmetJsonLdProp<FAQPage>(FAQSchema)]} />
    } */}
    <div id="faq" className={cls.wrapper}>
      <div className={cls.container}>
        <h1 className={cls.title}>Still have questions?</h1>
        <div className={cls.accordion}>
          <Accordion
            title="Which countries does Comfi support?"
            contents="Comfi is available to any of your customers that either have a Stripe account worldwide or a bank account in USA, UAE, Canada, UK, Germany, France, Netherlands, Ireland, Spain."
          />
          <Accordion
            title="Can any business work with Comfi?"
            contents="Comfi works with subscription-based B2B companies. There are certain high risk categories, or ethically questionable businesses that Comfi may not work with."
          />
          <Accordion
            title="How does Comfi’s pricing work?"
            contents="There are no platform fees to integrate with Comfi. Our pricing is applied on every transaction made through Comfi, and calculated based on your industry and annual sales volumes. This includes all payment gateway charges without any hidden fees.
<br/>To learn more, reach out to us at hi@comfi.app"
          />
          <Accordion
            title="How much time it takes to start?"
            contents="A couple of minutes if you want to use Comfi only for generating payment links and embedding them into your invoices or sending separately to your customers.
<br/>
<br/>
If you’d love to also integrate Comfi at your self-serve checkout through API that will take around 7-10 working days depending on your backlog."
          />
          <Accordion
            className="card"
            title="What if a user wants to upgrade the plan?"
            contents="You should treat us a payment gateway that lets your customer pay for any invoice in chunks. If your customer wants to change his/her plan you should issue a new invoice that contains the amount payable which the customer can split again."
          />
        </div>
        <div className={cls.btns}>
          <a
            href="https://comfiapp.tawk.help/category/getting-started"
            target="_blank"
            rel="noreferrer"
            className={cls.btn}
          >
            Getting started
          </a>
          <a
            href="https://comfiapp.tawk.help/category/payouts-and-risks"
            target="_blank"
            rel="noreferrer"
            className={cls.btn}
          >
            Payouts & risks
          </a>
          <a href="https://comfiapp.tawk.help/" target="_blank" rel="noreferrer" className={cx(cls.btn, cls.next)}>
            <span>See all FAQs</span>
            <div className={cls.next}>
              <Next />
            </div>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default FAQ;
