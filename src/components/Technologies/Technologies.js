import React from 'react';
import { DiAws, DiFirebase, DiJava, DiLinux, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Certifications</SectionTitle>
   <SectionText>
     These are my certifications
   </SectionText>
   <List>
     <ListItem>
       <DiAws size="3rem" />
       <ListContainer>
         <ListTitle>AWS Certified Cloud Practioner</ListTitle>
         <ListParagraph>
           November 2021
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiJava size="3rem" />
       <ListContainer>
         <ListTitle>Java Programming from Cypress Community College</ListTitle>
         <ListParagraph>
           August 2017
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiLinux size="3rem" />
       <ListContainer>
         <ListTitle>Comptia Security+</ListTitle>
         <ListParagraph>
           Taking exam Dec 2021
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
