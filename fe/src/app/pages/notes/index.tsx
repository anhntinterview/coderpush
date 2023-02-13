import * as React from 'react';
import { BaseComponent } from 'core/component/base';
import NotesView from 'app/view/notes';
import NotesModel from 'app/controller/notes.model';
import { INotesProps } from 'app/view/notes';

class NotesPage extends BaseComponent({
    model: new NotesModel(),
})<INotesProps> {
    baseElement = () => <NotesView model={this.props.model} />;
}

export default NotesPage;
