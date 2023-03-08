<script>
  import { CardBody, Accordion, AccordionItem } from "sveltestrap";

  export let question1;
  export let answer1;
  export let question2;
  export let answer2;
  export let question3;
  export let answer3;
  export let question4;
  export let answer4;

</script>

<Accordion class="custom-accordion">
  <AccordionItem active>
    <div slot="header">{question1}</div>
    <p class="mb-0">{answer1}</p>
  </AccordionItem>
  <AccordionItem>
    <div slot="header">{question2}</div>
    <p class="mb-0">{answer2}</p>
  </AccordionItem>
  <AccordionItem>
    <div slot="header">{question3}</div>
    <p class="mb-0">{answer3}</p>
  </AccordionItem>
  <AccordionItem>
    <div slot="header">{question4}</div>
    <p class="mb-0">{answer4}</p>
  </AccordionItem>
</Accordion>