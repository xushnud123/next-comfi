interface Events {}

function analytic(event: string, events: Events) {
  if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    window?.dataLayer.push({ event, ...events });
  }
}

export default analytic;
