import { DateYMDString } from "../../globalTypes";


export interface IGetRecordDto  {
  record: string;
  partnership_id: string;
}

export interface RecordType {

}

export interface IGetListDto  {
  date_start: string,
  date_end: string,
  in_out: number
}

export interface ListOfCalls {
  totalRows: string,
  result: Array<ICall>,
}


  export interface PartnerData {
      id: string;
      name: string;
      phone: string;
  }

  export interface IAnswer {
      message: string;
      from_support: number;
      support_read_status: number;
      person_read_status: number;
  }

  export interface IAbuse {
      date: string;
      person_name: string;
      message: string;
      support_read_status: number;
      support_answer_status: number;
      answers: IAnswer[];
  }

  export interface IError {
    title: string
  }

  export interface IResult  {
    type: string,
    title: string,
    tooltip: string
  }

export interface IStage {
		"person_name": string,
		"person_surname": string,
		"person_mango_phone": string,
		"duration": string,
		"disconnect_reason": string
}

  export interface ICall {
      id: number;
      partnership_id: string;
      partner_data: PartnerData;
      date: Date;
      date_notime: DateYMDString;
      time: number;
      from_number: string;
      from_extension: string;
      to_number: string;
      to_extension: string;
      is_skilla: number;
      status: string;
      record: string;
      line_number: string;
      in_out: number;
      from_site: number;
      source: string;
      errors: Array<IError>;
      disconnect_reason: string;
      results: Array<IResult>;
      stages: Array<IStage>;
      abuse: IAbuse;
      contact_name: string;
      contact_company: string;
      person_id: number;
      person_name: string;
      person_surname: string;
      person_avatar: string;
  }



