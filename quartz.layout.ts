import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.Graph()),
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Darkmode()),

    Component.RecentNotes({
      title: "Recent Notes",
      limit: 10,
      filter: (f) =>
        f.slug!.startsWith("/") && f.slug! !== "/index" && !f.frontmatter?.noindex,
      linkToMore: "/" as SimpleSlug,
    }),

  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.Search(),
    Component.Explorer(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
