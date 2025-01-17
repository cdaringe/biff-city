type Pipeline = any;

export const pipeline: Pipeline = (
  stream,
  {
    rxjs: {
      operators: { filter, mergeMap },
    },
  }
) =>
  stream.pipe(
    filter((evt) => evt.name === "issue_comment"),
    mergeMap((evt) => evt.tk.gh.withPR(evt, evt.payload.issue.number)),
    mergeMap((evt) => evt.tk.gh.withPRComments(evt, evt.ctx.pr.number)),
    mergeMap((evt) => evt.tk.gh.approvePR(evt, evt.ctx.pr.number)),
    mergeMap((evt) => evt.tk.gh.mergePR(evt, evt.ctx.pr.number))
  );
