'use client';

import { useMemo, useState, type FormEvent } from 'react';
import styles from './review.module.css';

type Rating = 'excellent' | 'good' | 'needs-improvement' | null;
type BookingSource = 'airbnb' | 'vrbo' | 'direct' | 'ocean-one' | 'other' | null;

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mredgwoa';
const AIRBNB_LISTING_URL = 'https://www.airbnb.com/rooms/848631524701015367';
const CONTACT_EMAIL = 'seaturtlevillaroatan@gmail.com';

export default function ReviewClient() {
  const [rating, setRating] = useState<Rating>(null);
  const [bookingSource, setBookingSource] = useState<BookingSource>(null);
  const [submitted, setSubmitted] = useState(false);

  const ratingLabel = useMemo(() => {
    if (rating === 'excellent') return 'Excellent / 5 stars';
    if (rating === 'good') return 'Good / 4 stars';
    if (rating === 'needs-improvement') return 'Needs improvement';
    return '';
  }, [rating]);

  function resetFlow() {
    setRating(null);
    setBookingSource(null);
    setSubmitted(false);
  }

  return (
    <main className={styles.pageShell}>
      <header className={styles.topbar}>
        <a href="/" className={styles.brand} aria-label="Sea Turtle Villa home">
          <span>Sea Turtle Villa</span>
          <small>West Bay · Roatan</small>
        </a>
        <a href="/" className={styles.homeLink}>Back to villa site</a>
      </header>

      <section className={styles.heroCard}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Thank you for staying with us</p>
          <h1>How was your Sea Turtle Villa stay?</h1>
          <p className={styles.lead}>
            Your feedback helps us improve the guest experience and helps future travelers feel confident choosing a West Bay stay that feels private, easy, and memorable.
          </p>
        </div>
      </section>

      {!submitted && !rating && (
        <section className={styles.card} aria-labelledby="rating-heading">
          <p className={styles.stepLabel}>Step 1 of 2</p>
          <h2 id="rating-heading">How would you rate your stay?</h2>
          <div className={styles.choiceGrid}>
            <button className={styles.choiceButton} onClick={() => setRating('excellent')}>
              <span className={styles.stars}>★★★★★</span>
              <strong>Excellent</strong>
              <span>We had a wonderful stay.</span>
            </button>
            <button className={styles.choiceButton} onClick={() => setRating('good')}>
              <span className={styles.stars}>★★★★☆</span>
              <strong>Good</strong>
              <span>Overall positive, with a few notes.</span>
            </button>
            <button className={styles.choiceButton} onClick={() => setRating('needs-improvement')}>
              <span className={styles.stars}>★★★☆☆</span>
              <strong>Needs Improvement</strong>
              <span>Something could have been better.</span>
            </button>
          </div>
        </section>
      )}

      {!submitted && rating && !bookingSource && rating !== 'needs-improvement' && (
        <section className={styles.card} aria-labelledby="source-heading">
          <p className={styles.stepLabel}>Step 2 of 2</p>
          <h2 id="source-heading">How did you book your stay?</h2>
          <p className={styles.helpText}>
            This helps us route you correctly. Airbnb reviews are only available for guests who booked through Airbnb.
          </p>
          <div className={styles.sourceGrid}>
            <button onClick={() => setBookingSource('airbnb')}>Airbnb</button>
            <button onClick={() => setBookingSource('vrbo')}>VRBO</button>
            <button onClick={() => setBookingSource('direct')}>Direct Booking</button>
            <button onClick={() => setBookingSource('ocean-one')}>Ocean One</button>
            <button onClick={() => setBookingSource('other')}>Other</button>
          </div>
          <button className={styles.textButton} onClick={() => setRating(null)}>Back</button>
        </section>
      )}

      {!submitted && rating === 'needs-improvement' && (
        <FeedbackForm
          ratingLabel={ratingLabel}
          bookingSource="Private feedback"
          title="We're sorry we missed the mark."
          intro="Please tell us what happened. Every message is personally reviewed, and this helps us improve the experience for future guests."
          buttonText="Send Private Feedback"
          onSubmitted={() => setSubmitted(true)}
          onBack={() => setRating(null)}
        />
      )}

      {!submitted && bookingSource === 'airbnb' && (
        <section className={styles.card}>
          <p className={styles.stepLabel}>Airbnb guest</p>
          <h2>Thank you - Airbnb reviews help future guests discover Sea Turtle Villa.</h2>
          <p className={styles.helpText}>
            Please leave your review through Airbnb using the account that booked your stay. Airbnb controls the review flow, so this opens the listing and your Airbnb account should show review options for eligible completed stays.
          </p>
          <div className={styles.buttonRow}>
            <a className={styles.primaryLink} href={AIRBNB_LISTING_URL} target="_blank" rel="noreferrer">Open Airbnb</a>
            <button className={styles.secondaryButton} onClick={() => setBookingSource('direct')}>Share a website testimonial too</button>
          </div>
          <button className={styles.textButton} onClick={() => setBookingSource(null)}>Back</button>
        </section>
      )}

      {!submitted && bookingSource === 'vrbo' && (
        <section className={styles.card}>
          <p className={styles.stepLabel}>VRBO guest</p>
          <h2>Thank you - please review your stay through VRBO.</h2>
          <p className={styles.helpText}>
            VRBO reviews are tied to the reservation and guest account used to book. Please open your VRBO trip details or post-stay email to complete the review. You can also share a website testimonial with us below.
          </p>
          <div className={styles.buttonRow}>
            <button className={styles.primaryButton} onClick={() => setBookingSource('direct')}>Share website testimonial</button>
          </div>
          <button className={styles.textButton} onClick={() => setBookingSource(null)}>Back</button>
        </section>
      )}

      {!submitted && ['direct', 'ocean-one', 'other'].includes(bookingSource || '') && (
        <FeedbackForm
          ratingLabel={ratingLabel}
          bookingSource={bookingSource || 'Unknown'}
          title="Would you share a few words about your stay?"
          intro="Your comments may help future guests understand what makes Sea Turtle Villa special. You can also let us know what would make the experience even better."
          buttonText="Send Feedback"
          onSubmitted={() => setSubmitted(true)}
          onBack={() => setBookingSource(null)}
          includePermission
          includeOptIn
        />
      )}

      {submitted && (
        <section className={styles.card}>
          <p className={styles.stepLabel}>Received</p>
          <h2>Thank you for sharing your feedback.</h2>
          <p className={styles.helpText}>
            We genuinely appreciate it. Guest feedback helps us keep improving Sea Turtle Villa and the experience we create in West Bay.
          </p>
          <button className={styles.secondaryButton} onClick={resetFlow}>Start over</button>
        </section>
      )}

      <footer className={styles.footerNote}>
        <p>Sea Turtle Villa · Ocean One Villa 3 · West Bay, Roatan</p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </footer>
    </main>
  );
}

function FeedbackForm({
  ratingLabel,
  bookingSource,
  title,
  intro,
  buttonText,
  onSubmitted,
  onBack,
  includePermission = false,
  includeOptIn = false,
}: {
  ratingLabel: string;
  bookingSource: string;
  title: string;
  intro: string;
  buttonText: string;
  onSubmitted: () => void;
  onBack: () => void;
  includePermission?: boolean;
  includeOptIn?: boolean;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      onSubmitted();
      form.reset();
      setStatus('idle');
    } else {
      setStatus('error');
    }
  }

  return (
    <section className={styles.card} aria-labelledby="feedback-heading">
      <p className={styles.stepLabel}>{bookingSource}</p>
      <h2 id="feedback-heading">{title}</h2>
      <p className={styles.helpText}>{intro}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="form_name" value="Sea Turtle Villa Review Funnel" />
        <input type="hidden" name="rating" value={ratingLabel} />
        <input type="hidden" name="booking_source" value={bookingSource} />
        <input type="text" name="_gotcha" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <label>
          Name <span>optional</span>
          <input name="name" type="text" autoComplete="name" />
        </label>

        <label>
          Email <span>optional</span>
          <input name="email" type="email" autoComplete="email" />
        </label>

        <label>
          Stay dates <span>optional</span>
          <input name="stay_dates" type="text" placeholder="Example: March 10-17" />
        </label>

        <label>
          What would you like to share?
          <textarea name="message" rows={6} required placeholder="Tell us what you loved, what could be improved, or what future guests should know." />
        </label>

        {includePermission && (
          <label className={styles.checkboxLabel}>
            <input name="testimonial_permission" type="checkbox" value="Yes" />
            <span>You may use my comments as a Sea Turtle Villa website testimonial.</span>
          </label>
        )}

        {includeOptIn && (
          <label className={styles.checkboxLabel}>
            <input name="future_offers_opt_in" type="checkbox" value="Yes" />
            <span>I would like to hear about future availability, return-guest offers, or Sea Turtle Villa updates.</span>
          </label>
        )}

        {status === 'error' && (
          <p className={styles.errorText}>Sorry, something went wrong. Please email us directly at {CONTACT_EMAIL}.</p>
        )}

        <div className={styles.buttonRow}>
          <button className={styles.primaryButton} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : buttonText}
          </button>
          <button className={styles.secondaryButton} type="button" onClick={onBack}>Back</button>
        </div>
      </form>
    </section>
  );
}
