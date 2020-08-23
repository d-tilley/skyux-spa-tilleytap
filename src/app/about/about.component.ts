import {
  Component
} from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  public nodes: any[] = [
    {
      name: 'Animals',
      isExpanded: true,
      children: [
        { name: 'Cats', isExpanded: true, children: [
          { name: 'Burmese' },
          { name: 'Persian' },
          { name: 'Tabby' }
          ]
        },
        { name: 'Dogs', isExpanded: true, children: [
          { name: 'Beagle' },
          { name: 'German Shepard' },
          { name: 'Labrador Retriever' }
          ]
        }
      ]
    }
  ];
}
