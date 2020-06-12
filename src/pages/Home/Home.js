import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getDiffTime } from "../../utils/getDiffTime";
import WithContainer from "../../hocs/withContainer";
import { StyledHome, ContactsWrapper } from "./StyledHome";
import { ContactCard } from "../../components/ContactCard/ContactCard";

function sortByQualityAndLastActivity(ob1, ob2) {
  if (ob2.quality > ob1.quality) {
    return 1;
  } else if (ob2.quality < ob1.quality) {
    return -1;
  }

  // Else go to the 2nd item
  if (ob2.diffTime.diffMilliSeconds > ob1.diffTime.diffMilliSeconds) {
    return 1;
  } else if (ob2.diffTime.diffMilliSeconds < ob1.diffTime.diffMilliSeconds) {
    return -1;
  } else {
    // nothing to split them
    return 0;
  }
}

export const Home = () => {
  const settings = useSelector((state) => state.settings);
  let contacts = useSelector((state) => state.contacts);

  contacts = contacts.filter((c) => {
    // only show the settings category contacts
    // eslint-disable-next-line
    if (
      c.category === settings.category ||
      !c.category ||
      !c.category === "pas de category"
    )
      return true;
    return false;
  });

  contacts = contacts.filter((c) => {
    // don't show bad quality contacts
    // eslint-disable-next-line
    if (c.quality == 0) return false;

    return true;
  });

  const prospectNb = contacts.length;

  contacts.map((c) => {
    // add diff time between now and last activity to contacts
    c.diffTime = getDiffTime(c.lastActivity);

    return c;
  });

  contacts = contacts.filter((c) => {
    // show new contact without any activity yet
    if (!c.lastActivity) return true;

    // do not show too recent activity contact
    if (!(c.diffTime.diffDays >= settings.showContactIfLastActivityOlderThen))
      return false;

    return true;
  });

  // sort contacts by quality then by last activity older to newer
  contacts = contacts.sort(sortByQualityAndLastActivity);

  // only show firsts contacts of the list
  contacts = contacts.slice(0, settings.maxContactsToShow);

  return (
    <WithContainer title="Accueil">
      <StyledHome>
        <p>Nombre de prospects de qualité : {prospectNb}</p>

        <Link className="add-contact" to="/ajouter-ou-modifier-un-contact">
          Ajouter un nouveau prospect
        </Link>

        <hr />

        <div className="contact-to-work">
          <p>Prospects à relancer :</p>

          <ContactsWrapper>
            {contacts.length ? (
              contacts.map((c) => <ContactCard key={c.id} contact={c} />)
            ) : (
              <p>Pas de contact</p>
            )}
          </ContactsWrapper>
        </div>
      </StyledHome>
    </WithContainer>
  );
};
